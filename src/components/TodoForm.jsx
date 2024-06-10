import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = (e) => {
    e.preventDefault();

    if (title === "") return alert("제목을 입력해주세요");
    if (content === "") return alert("내용을 입력해주세요");

    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <form>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onAddTodo}>추가</button>
    </form>
  );
}
