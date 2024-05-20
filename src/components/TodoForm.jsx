import { useState } from "react";
import propTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefalut();
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    addTodo({
      id: Date.now(),
      title,
      content,
      isDone: false,
    });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />  
      <button type="submit">추가</button>    
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: propTypes.func.isRequired,
};

export default TodoForm;
