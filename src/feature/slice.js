import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = [];
const todoReducer = createSlice({
  initialState,
  name: "todo",
  reducers: {
    handleAddNewTodo: (state, { payload: { name } }) => {
      if (name) {
        state.push({
          name: name,
          id: uuid(),
          isChecked: false,
        });
      }
    },
    handleChangeText: (state, { payload: { modalText, id } }) => {
      state[state.findIndex((it) => it.id === id)].name = modalText;
    },
    reset: (state) => initialState,

    deleteTodo: (state, { payload: { id } }) => {
      return state.filter((it) => it.id !== id);
    },
    changeCheckbox: (state, { payload: { id } }) => {
      return state.map((it) => {
        if (it.id === id) {
          return {
            ...it,
            isChecked: !it.isChecked,
          };
        }
        return it;
      });
    },
    handleAllChecked: (state) => {
      return state.map((it) => {
        return {
          ...it,
          isChecked: true,
        };
      });
    },
    handleAllUnchecked: (state) => {
      return state.map((it) => {
        return {
          ...it,
          isChecked: false,
        };
      });
    },
  },
});

export const {
  handleAddNewTodo,
  handleChangeText,
  reset,
  deleteTodo,
  changeCheckbox,
  handleAllChecked,
  handleAllUnchecked,
} = todoReducer.actions;

export default todoReducer.reducer;
