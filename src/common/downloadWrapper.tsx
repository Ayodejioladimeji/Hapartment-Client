import { ACTIONS } from "@/store/Actions";
import { DataContext } from "@/store/GlobalState";
import { Children, useContext } from "react";
import { Modal } from "react-bootstrap";

const DownloadWrapper = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { downloadModal } = state;

  return (
    <Modal
      show={downloadModal}
      onHide={() => dispatch({ type: ACTIONS.DOWNLOAD_MODAL, payload: false })}
      className="receive-package"
    >
      {children}
    </Modal>
  );
};

export default DownloadWrapper;
