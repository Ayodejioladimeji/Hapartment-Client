"use client"
import { useRouter } from "next/navigation";

const Goback = () => {
  const router = useRouter();

  return (
    <i
      onClick={() => router.back()}
      className="bi goback bi-arrow-left-circle"
    ></i>
  );
};

export default Goback;
