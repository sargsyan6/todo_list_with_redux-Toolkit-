import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddNewTodo } from "feature/slice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddText = (e) => {
    const todoText = e.target.value;

    setText(todoText);
  };

  const handleAddNewValue = () => {
    const todoText = text.trim();
    if (todoText.length > 5) {
      dispatch(handleAddNewTodo({ name: text }));
      setText("");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddNewValue();
      }}
    >
      <div>
        <input
          className="add-inp"
          value={text}
          onChange={handleAddText}
          type="text"
        />
        <button className="add-btn" onClick={handleAddNewValue}>
          add
        </button>
      </div>
      {text.trim().length < 5 && (
        <div>{text.length ? "Please write valid text" : ""}</div>
      )}
    </form>
  );
};

export default AddTodo;
