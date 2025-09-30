import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Learn React' },
    // { id: 2, name: 'Watching Youtube' },
  ]);

  // const binhPhan = 'Bình Phan';
  // const age = 21;
  // const data = {
  //   address: 'TP.HCM',
  //   country: 'Vietnam',
  // };

  const addNewTodo = (name) => {
    // alert(`Hello ${name}`);

    const newTodo = { id: randomIntFromInterval(1, 1000), name: name };

    // todoList.push(newTodo); // Không nên sửa đổi trực tiếp state todoList mà phải thông qua hàm setTodoList
    setTodoList([...todoList, newTodo]);
  };
  // addNewTodo();

  // Render unique id ()
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <p className="todo-title">Todo List</p>
      <TodoNew addNewTodo={addNewTodo} />

      {todoList.length > 0 ? (
        <TodoData todoList={todoList} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
    </div>
  );
};

export default App;
