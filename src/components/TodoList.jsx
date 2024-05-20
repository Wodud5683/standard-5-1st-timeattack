import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      ))}
    </div>
  );
};

TodoItem.PropTypes = {
  todos: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }) .isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
