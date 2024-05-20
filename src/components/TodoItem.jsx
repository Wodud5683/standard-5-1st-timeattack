import PropTypes from 'prop-types';


const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
};

TodoItem.PropTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }) .isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}
export default TodoItem;