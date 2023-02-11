import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { Children, useContext } from "react";
import Modal from "react-modal";

const DownloadWrapper = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { downloadModal } = state;

  return (
    <Modal
      isOpen={downloadModal}
      onRequestClose={() =>
        dispatch({ type: ACTIONS.DOWNLOAD_MODAL, payload: false })
      }
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-after",
        beforeClose: "overlay-before",
      }}
      className={{
        base: "content-base",
        afterOpen: "content-after",
        beforeClose: "content-before",
      }}
      closeTimeoutMS={500}
      ariaHideApp={false}
    >
      <i
        onClick={() =>
          dispatch({ type: ACTIONS.DOWNLOAD_MODAL, payload: false })
        }
        className="bi onclose bi-x-octagon"
      ></i>
      {children}
    </Modal>
  );
};

export default DownloadWrapper;
