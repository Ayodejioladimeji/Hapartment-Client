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
    <div className="text-center my-5">
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <BallTriangle
            height={60}
            width={60}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperclassName={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <button className="btn mx-auto" onClick={showItems}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
