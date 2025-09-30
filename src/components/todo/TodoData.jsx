const TodoData = (props) => {
  // props là một object {} -> Có thể dùng Object Destructuring
  const { name, age, data } = props;
  console.log('>>> Check props:', props);
  return (
    <div className="todo-data">
      <div>My name is: {name}</div>
      <div>Learning React</div>
      <div>Watching Youtube</div>

      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};

export default TodoData;
