import { redirect } from "next/navigation";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const handleCreate = async (formData: FormData) => {
  "use server";

  const todo = formData.get("todo");

  if (todo === null) {
    return;
  }

  await prisma.todos.create({
    data: {
      todo: todo.toString(),
    },
  });

  redirect("/todo");
};

const TodoCreate = () => {
  return (
    <>
      <h2>todo create</h2>
      <form action={handleCreate}>
        <input type="text" name="todo" />
      </form>
    </>
  );
};

export default TodoCreate;
