import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Placeholder = () => {
  const styles = {
    border: "1px solid var(--light-color)",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <>
      <div style={styles}>
        <Skeleton height={24} width="100%" style={{ marginTop: 22 }} />
        <Skeleton
          height={20}
          width="100%"
          style={{ marginTop: 10, marginBottom: 22 }}
        />
        <Skeleton height={14} width="100%" count={3} style={{ marginTop: 4 }} />
        <Skeleton height={21} width="100%" style={{ marginTop: 14 }} />
      </div>
    </>
  );
};

export default Placeholder;
