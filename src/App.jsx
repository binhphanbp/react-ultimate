import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
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
      <TodoData name={binhPhan} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
