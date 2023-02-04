import { useRouter } from "next/router";

const Goback = () => {
  const router = useRouter();

  return (
    <i onClick={() => router.back()} class="bi goback bi-arrow-left-circle"></i>
  );
};

export default Goback;
