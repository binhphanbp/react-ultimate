const TodoNew = (props) => {
  console.log('>>> Check props:', props);
  const { addNewTodo } = props;

  // addNewTodo('Bình Phan');
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;
