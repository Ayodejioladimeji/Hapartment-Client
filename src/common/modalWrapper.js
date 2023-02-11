import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { useContext } from "react";
import Modal from "react-modal";

const ModalWrapper = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { isOpen } = state;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() =>
        dispatch({ type: ACTIONS.OPENMODAL, payload: false })
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
        onClick={() => dispatch({ type: ACTIONS.OPENMODAL, payload: false })}
        className="bi onclose bi-x-octagon"
      ></i>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
