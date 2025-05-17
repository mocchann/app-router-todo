import Link from "next/link";

const TodoIndex = () => {
  return (
    <>
      <h2>todo index</h2>
      <button>
        <Link href={"/todo/create"}>create</Link>
      </button>
      <ul>
        <li>
          todo1<Link href={"/todo/1/edit"}>edit</Link>
        </li>
        <li>
          todo2<Link href={"/todo/2/edit"}>edit</Link>
        </li>
        <li>
          todo2<Link href={"/todo/3/edit"}>edit</Link>
        </li>
      </ul>
    </>
  );
};

export default TodoIndex;
