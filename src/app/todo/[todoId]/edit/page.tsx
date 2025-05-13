const TodoEdit = () => {
  return (
    <>
      <h2>todo edit</h2>
      <form action="/todo/1/edit" method="post">
        <input type="text" />
      </form>
      <form action="/todo/1/delete" method="post">
        <button>delete</button>
      </form>
    </>
  );
};

export default TodoEdit;
