import React, { useEffect } from "react";
import BoardTemplate from "../../components/templates/board/Board.template";
import { useGetTicketBoardQuery } from "../../graphql/generate/generated";
import {
  BoardTemplateProps,
  BoardTickets,
} from "../../components/templates/board/type";
import { DropResult } from "@hello-pangea/dnd";

const BoardPage: React.FC = () => {
  const { data, loading } = useGetTicketBoardQuery();

  const [columns, setColumns] = React.useState<{
    todo: BoardTickets[];
    inProgress: BoardTickets[];
    inReview: BoardTickets[];
    completed: BoardTickets[];
  }>({
    todo: [],
    inProgress: [],
    inReview: [],
    completed: [],
  });

  useEffect(() => {
    if (data) {
      setColumns({
        todo: data.ticketBoard.filter((ticket) => ticket.status === "todo"),
        inProgress: data.ticketBoard.filter(
          (ticket) => ticket.status === "in progress",
        ),
        inReview: data.ticketBoard.filter(
          (ticket) => ticket.status === "in review",
        ),
        completed: data.ticketBoard.filter(
          (ticket) => ticket.status === "completed",
        ),
      });
    }
  }, [data]);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns[source.droppableId as keyof typeof columns];
    const destColumn = columns[destination.droppableId as keyof typeof columns];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  const boardTemplateProps: BoardTemplateProps = {
    columns,
    events: {
      onDragEnd: onDragEnd,
    },
  };

  return <BoardTemplate {...boardTemplateProps} />;
};

BoardPage.whyDidYouRender = true;
export default BoardPage;
