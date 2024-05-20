import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !==id));
    
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
    todo.id === id ? {...todos, isDone: !todo.isDone }: todo
  ));
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => !todo.isDone);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <h2>Working</h2>
      <TodoList todos={workingTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <h2>Done</h2>
      <TodoList todos={doneTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    
    </div>
  );
};

export default App;
