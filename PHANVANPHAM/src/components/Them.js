import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const Them = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Bạn chưa nhập note!!");
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );

    setValue("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

export default Them;
