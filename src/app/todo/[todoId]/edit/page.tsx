const TodoEdit = () => {
  return (
    <>
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
