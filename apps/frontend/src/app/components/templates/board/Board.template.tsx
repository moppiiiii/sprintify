import React from "react";
import UsuallyLayout from "../../layouts/usually/Usually.layout";

import { Box, Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
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
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <Box
          className={`${classes.item} ${snapshot.isDragging ? classes.itemDragging : ""}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Box {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: 18, height: 18 }} stroke={1.5} />
          </Box>
          <Text className={classes.symbol}>{item.symbol}</Text>
          <Box>
            <Text>{item.name}</Text>
            <Text c="dimmed" size="sm">
              Position: {item.position} • Mass: {item.mass}
            </Text>
          </Box>
        </Box>
      )}
    </Draggable>
  ));

  return (
    <UsuallyLayout>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </UsuallyLayout>
  );
};

BoardTemplate.whyDidYouRender = true;
export default BoardTemplate;
