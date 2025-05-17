import Link from "next/link";

export const TodoLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <h1>
        <Link href={"/todo"}>app router todo</Link>
      </h1>
      <main>{children}</main>
    </>
  );
};

export default TodoLayout;
