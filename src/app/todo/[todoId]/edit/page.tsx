import { redirect } from "next/navigation";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();

const handleUpdate = async (formData: FormData) => {
  "use server";

  const todoId = formData.get("id");
  const todo = formData.get("todo");

  if (todoId === null || todo === null) {
    return;
  }

  await prisma.todos.update({
    where: {
      id: parseInt(todoId.toString()),
    },
    data: {
      todo: todo.toString(),
    },
  });

  redirect("/todo");
};

const TodoEdit = async ({ params }: { params: { todoId: string } }) => {
  const todo = await prisma.todos.findUnique({
    where: {
      id: Number(params.todoId),
    },
  });

  if (!todo) {
    console.warn(`todoId: ${params.todoId} not found`);
    return redirect("/todo");
  }

  return (
    <>
      <h2>todo edit</h2>
      <form action={handleUpdate}>
        <input type="hidden" name="id" value={todo.id} />
        <input type="text" name="todo" defaultValue={todo.todo} />
      </form>
      <form action="/todo/1/delete" method="post">
        <button>delete</button>
      </form>
    </>
  );
};

export default TodoEdit;
