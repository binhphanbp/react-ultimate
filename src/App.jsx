import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Watching Youtube' },
  ]);

  const binhPhan = 'Bình Phan';
  const age = 21;
  const data = {
    address: 'TP.HCM',
    country: 'Vietnam',
  };

  const addNewTodo = (name) => {
    alert(`Hello ${name}`);
  };
  // addNewTodo();

  return (
    <div className="todo-container">
      <p className="todo-title">Todo List</p>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={binhPhan} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
