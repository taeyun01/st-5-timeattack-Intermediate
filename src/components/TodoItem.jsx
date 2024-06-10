// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ id, title, content, isDone }) {
  const dispatch = useDispatch();

  const onDeleteButton = () => {
    dispatch(deleteTodo(id));
  };

  const onToggleButton = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {title}</p>
        <p>내용: {content}</p>
      </section>
      <section>
        <button onClick={onToggleButton}>
          {!isDone ? "완료" : "취소"}
        </button>
        <button onClick={onDeleteButton}>삭제</button>
      </section>
    </li>
  );
}
