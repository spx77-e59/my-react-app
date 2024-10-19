function TodoList({ todos }) {
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoList;
