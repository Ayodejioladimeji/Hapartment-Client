import Link from "next/link";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign:'center'
      }}
    >
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link href="/">Go home</Link>
      </div>
    </div>
  );
};
export default Error;
