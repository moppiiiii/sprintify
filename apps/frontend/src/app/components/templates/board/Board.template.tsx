import React from "react";
import UsuallyLayout from "../../layouts/usually/Usually.layout";

import { Box, Flex, Text } from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import classes from "./Board.template.module.scss";
import { IconGripVertical } from "@tabler/icons-react";

const data = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const BoardTemplate: React.FC = () => {
  const [columns, setColumns] = React.useState({
    column1: data,
    column2: [],
    column3: [],
  });

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

  return (
    <UsuallyLayout>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex gap="md" className={classes["board-template-container"]}>
          {Object.entries(columns).map(([columnId, columnItems]) => (
            <Box key={columnId} className={classes["column-container"]}>
              <Droppable droppableId={columnId} direction="vertical">
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classes["column-wrapper"]}
                  >
                    {columnItems.map((item, index) => (
                      <Draggable
                        key={item.symbol}
                        draggableId={item.symbol}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Box
                            className={`${classes.item} ${snapshot.isDragging ? classes.itemDragging : ""}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <Box
                              {...provided.dragHandleProps}
                              className={classes.dragHandle}
                            >
                              <IconGripVertical
                                style={{ width: 18, height: 18 }}
                                stroke={1.5}
                              />
                            </Box>
                            <Text className={classes.symbol}>
                              {item.symbol}
                            </Text>
                            <Box>
                              <Text>{item.name}</Text>
                              <Text c="dimmed" size="sm">
                                Position: {item.position} • Mass: {item.mass}
                              </Text>
                            </Box>
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          ))}
        </Flex>
      </DragDropContext>
    </UsuallyLayout>
  );
};

BoardTemplate.whyDidYouRender = true;
export default BoardTemplate;
