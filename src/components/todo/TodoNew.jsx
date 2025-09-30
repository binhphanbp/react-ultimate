import { useState } from 'react';

const TodoNew = (props) => {
  // useState hook
  // const valueInput = 'Bình Phan';
  const [valueInput, setValueInput] = useState('Bình Phan');

  const { addNewTodo } = props;
  // addNewTodo('Bình Phan'); // fire

  const handleClick = () => {
    console.log('>>> Handle click', valueInput);
  };

  const handleOnChange = (name) => {
    // console.log('>>> Handle onChange', name);
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
        type="text"
      />
      <button style={{ cursor: 'pointer' }} onClick={handleClick}>
        Add
      </button>

      <div>My text is: {valueInput}</div>
    </div>
  );
};

export default TodoNew;
