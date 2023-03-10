import React from "react";
import Task from "./task.jsx";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
`;

const column = ({ tasks, column }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} key={column.id}>
        {(provided, snapshot) => {
          return (
            <TaskList {...provided.droppableProps} ref={provided.innerRef} 
            isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
    </Container>
  );
};

export default column;
