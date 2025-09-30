const TodoNew = (props) => {
  console.log('>>> Check props:', props);
  const { addNewTodo } = props;

  // addNewTodo('Bình Phan'); // fire
  const handleClick = () => {
    alert('Clicked');
  };

  const handleOnChange = (name) => {
    console.log('>>> Handle onChange', name);
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
    </div>
  );
};

export default TodoNew;
