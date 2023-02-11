import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { useContext } from "react";
import Modal from "react-modal";

const NewsletterModalWrapper = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { newsModal } = state;

  return (
    <Modal
      isOpen={newsModal}
      onRequestClose={() =>
        dispatch({ type: ACTIONS.NEWSMODAL, payload: false })
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
        onClick={() => dispatch({ type: ACTIONS.NEWSMODAL, payload: false })}
        className="bi onclose bi-x-octagon"
      ></i>
      {children}
    </Modal>
  );
};

export default NewsletterModalWrapper;
