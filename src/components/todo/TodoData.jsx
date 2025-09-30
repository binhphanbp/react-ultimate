const TodoData = (props) => {
  // props là một object {} -> Có thể dùng Object Destructuring
  const { todoList } = props;

  console.log('>>> Check props:', todoList);
  return (
    <div className="todo-data">
      {todoList.map((item) => {
        return (
          <>
            <div className={`todo-item`} key={item.id}>
              <div> {item.name}</div>
              <button>Delete</button>
            </div>
          </>
        );
      })}
      {/* <div>Learning React</div>
      <div>Watching Youtube</div> */}

      {/* <div>{JSON.stringify(props.todoList)}</div> */}
    </div>
  );
};

export default TodoData;
