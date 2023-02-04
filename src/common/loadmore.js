import React from "react";
import { BallTriangle } from "react-loader-spinner";

const LoadMore = ({ loading, setLoading, setVisible }) => {
  const showItems = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 3);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="text-center mt-5">
      {loading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : (
        <button className="btn mx-auto" onClick={showItems}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
