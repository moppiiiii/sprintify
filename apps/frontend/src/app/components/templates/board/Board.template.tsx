import React from "react";
import UsuallyLayout from "../../layouts/usually/Usually.layout";

import { Avatar, Box, Flex, Paper, Text } from "@mantine/core";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import classes from "./Board.template.module.scss";
import { IconGripVertical } from "@tabler/icons-react";
import { BoardTemplateProps } from "./type";

const BoardTemplate: React.FC<BoardTemplateProps> = ({ columns, events }) => {
  return (
    <UsuallyLayout>
      <DragDropContext onDragEnd={events.onDragEnd}>
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
                        key={item.id}
                        draggableId={item.id}
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
                                role="img"
                                aria-hidden="true"
                                aria-label="drag-handle"
                              />
                            </Box>
                            <Avatar src={item.avatar} alt="avatar-image" />
                            <Box>
                              <Text>{item.title}</Text>
                              <Text c="dimmed" size="sm">
                                {item.deadline}
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
