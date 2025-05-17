import Link from "next/link";
import { PrismaClient } from "../../../generated/prisma";

const TodoIndex = async () => {
  const prisma = new PrismaClient();
  const todos = await prisma.todos.findMany();

  return (
    <>
      <h2>todo index</h2>
      <button>
        <Link href={"/todo/create"}>create</Link>
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo} <Link href={`/todo/${todo.id}/edit`}>edit</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoIndex;
