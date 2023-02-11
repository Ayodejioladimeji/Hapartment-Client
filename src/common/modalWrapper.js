import Modal from "react-modal";

const ModalWrapper = ({ isOpen, setIsOpen, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
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
        onClick={() => setIsOpen(false)}
        className="bi onclose bi-x-octagon"
      ></i>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
