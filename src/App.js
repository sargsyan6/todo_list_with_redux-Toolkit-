import { useDispatch, useSelector } from "react-redux";
import AddTodo from "AddTodo/AddTodo";
import "App.css";
import { handleAllChecked, reset, handleAllUnchecked } from "feature/slice";
import TodoList from "TodoList/TodoList";

function App() {
  const st = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  const countCheckedItems = st.filter(
    ({ isChecked }) => isChecked === true
  ).length;

  const ChangeAll =
    countCheckedItems === st.length ? handleAllUnchecked : handleAllChecked;

  return (
    <div className="wrapper">
      <AddTodo />
      <div className="container">
        {st.map(({ name, id, isChecked }) => {
          return (
            <TodoList key={id} id={id} name={name} isChecked={isChecked} />
          );
        })}
      </div>
      <div>
        {st.length ? (
          <div className="count_todo">
            {countCheckedItems} / {st.length}{" "}
            <button
              onClick={() => {
                dispatch(ChangeAll());
              }}
            >
              {st.length === countCheckedItems ? "Uncheck All" : "Check All"}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {st.length ? (
        <button className="reset" onClick={() => dispatch(reset())}>
          reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
