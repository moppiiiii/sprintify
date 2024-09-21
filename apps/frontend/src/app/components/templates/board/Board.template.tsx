import React from "react";
import UsuallyLayout from "../../layouts/usually/Usually.layout";

import { Box, Flex, Paper, Text } from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import classes from "./Board.template.module.scss";
import { IconGripVertical } from "@tabler/icons-react";

const data = [
  { position: 1, mass: 1.008, symbol: "H", name: "Hydrogen" },
  { position: 8, mass: 15.999, symbol: "O", name: "Oxygen" },
  { position: 11, mass: 22.99, symbol: "Na", name: "Sodium" },
  { position: 19, mass: 39.098, symbol: "K", name: "Potassium" },
  { position: 26, mass: 55.845, symbol: "Fe", name: "Iron" },
  { position: 29, mass: 63.546, symbol: "Cu", name: "Copper" },
  { position: 47, mass: 107.868, symbol: "Ag", name: "Silver" },
  { position: 79, mass: 196.967, symbol: "Au", name: "Gold" },
  { position: 82, mass: 207.2, symbol: "Pb", name: "Lead" },
  { position: 92, mass: 238.029, symbol: "U", name: "Uranium" },
];

const BoardTemplate: React.FC = () => {
  const [columns, setColumns] = React.useState({
    todo: data,
    inProgress: [],
    inReview: [],
    completed: [],
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
            <Paper
              key={columnId}
              shadow="md"
              className={classes["column-container"]}
            >
              <Text ta="center" className={classes["column-title"]}>
                {columnId}
              </Text>

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
                            className={`${classes["drag-item"]} ${snapshot.isDragging ? classes["item-dragging"] : ""}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <Box
                              {...provided.dragHandleProps}
                              className={classes["drag-handle"]}
                            >
                              <IconGripVertical
                                style={{ width: 18, height: 18 }}
                                stroke={1.5}
                              />
                            </Box>
                            <Text className={classes["drag-symbol"]}>
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
            </Paper>
          ))}
        </Flex>
      </DragDropContext>
    </UsuallyLayout>
  );
};

BoardTemplate.whyDidYouRender = true;
export default BoardTemplate;
