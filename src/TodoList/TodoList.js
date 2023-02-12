import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleChangeText, deleteTodo, changeCheckbox } from "feature/slice";

const TodoList = ({ name, id, isChecked }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalText, setModalText] = useState("");

  const dispatch = useDispatch();

  const handleAddModalText = (e) => {
    setIsModalOpened(true);
  };
  const handleCancel = (e) => {
    setIsModalOpened(false);
    setModalText("");
  };

  const handleSave = () => {
    if (modalText) {
      dispatch(handleChangeText({ modalText, id }));
      setModalText("");
      setIsModalOpened(false);
    }
  };

  const handleTodoDelate = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="todo-container">
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => dispatch(changeCheckbox({ id: id }))}
        />
        <span>{name}</span>
      </div>
      <div>
        {!isModalOpened ? (
          <button className="edit-btn" onClick={handleAddModalText}>
            edit
          </button>
        ) : (
          <div className="modal_container">
            {" "}
            <input
              value={modalText}
              onChange={(e) => setModalText(e.target.value)}
              type="text"
            />{" "}
            <div className="buttons_container">
              <button className="cancel-btn" onClick={handleCancel}>
                cancel
              </button>{" "}
              <button className="save-btn" onClick={handleSave}>
                save
              </button>
            </div>
          </div>
        )}
        {!isModalOpened && (
          <button className="delete" onClick={handleTodoDelate}>
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
