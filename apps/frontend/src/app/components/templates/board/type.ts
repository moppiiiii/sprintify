import { DropResult } from "@hello-pangea/dnd";
import { GetTicketBoardQuery } from "../../../graphql/generate/generated";

export type BoardTickets = Pick<
  GetTicketBoardQuery["ticketBoard"][number],
  "id" | "title" | "avatar" | "deadline"
>;

export type BoardTemplateProps = {
  columns: {
    todo: BoardTickets[];
    inProgress: BoardTickets[];
    inReview: BoardTickets[];
    completed: BoardTickets[];
  };
  events: {
    onDragEnd: (result: DropResult) => void;
  };
};
