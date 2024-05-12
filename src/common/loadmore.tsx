import React from "react";
import { Oval } from "react-loader-spinner";

type Props = {
  load: any;
  setLoad: any;
  visible: any;
  setVisible: any;
};

const LoadMore = ({ load, setLoad, visible, setVisible }: Props) => {
  const showItems = () => {
    setLoad(true);
    setTimeout(() => {
      setVisible((prevState) => prevState + 3);
      // localStorage.setItem("visible", Number(visible) + 3);
      setLoad(false);
    }, 2000);
  };

  return (
    <div className="text-center my-5">
      {load ? (
        <div className="d-flex align-items-center justify-content-center">
          <Oval
            height={60}
            width={60}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
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
