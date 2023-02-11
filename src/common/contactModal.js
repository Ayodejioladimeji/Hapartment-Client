import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { useContext } from "react";
import Modal from "react-modal";

const ContactModal = ({ alert }) => {
  const { state, dispatch } = useContext(DataContext);
  const { contactModal } = state;

  return (
    <Modal
      isOpen={contactModal}
      onRequestClose={() =>
        dispatch({ type: ACTIONS.CONTACT_MODAL, payload: false })
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
          dispatch({ type: ACTIONS.CONTACT_MODAL, payload: false })
        }
        className="bi onclose bi-x-octagon"
      ></i>
      <div className="main-modal">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="30" fill="#449342" />
          <path
            d="M26.2788 38.5436L18.3569 31.189C17.881 30.7472 17.881 30.0308 18.3569 29.5889L20.0805 27.9887C20.5564 27.5468 21.3281 27.5468 21.8041 27.9887L27.1406 32.9431L38.5709 22.3314C39.0469 21.8895 39.8186 21.8895 40.2945 22.3314L42.0181 23.9315C42.494 24.3734 42.494 25.0898 42.0181 25.5317L28.0024 38.5436C27.5264 38.9855 26.7548 38.9855 26.2788 38.5436Z"
            fill="#FDFDFE"
          />
        </svg>

        <h3>Message Received😊</h3>
        <p>{alert}</p>
      </div>
    </Modal>
  );
};

export default ContactModal;
