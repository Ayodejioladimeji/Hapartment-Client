import React from "react";
import { BallTriangle } from "react-loader-spinner";

const LoadMore = ({ load, setLoad, visible, setVisible }) => {
  const showItems = () => {
    setLoad(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 3);
      localStorage.setItem("visible", Number(visible) + 3);
      setLoad(false);
    }, 2000);
  };

  return (
    <div className="text-center my-5">
      {load ? (
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
