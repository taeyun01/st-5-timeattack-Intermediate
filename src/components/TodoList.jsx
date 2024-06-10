import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <section>
      <h2>Working...</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
      </ul>
    </section>
  );
}
