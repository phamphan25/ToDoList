import React from "react";
import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

const DanhsachViec = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <ul className="tasks-list">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
};

export default DanhsachViec;
