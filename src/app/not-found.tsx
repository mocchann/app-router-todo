"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <h2>404 Not Found</h2>
      <button onClick={handleClick}>TopPage</button>
    </>
  );
}
