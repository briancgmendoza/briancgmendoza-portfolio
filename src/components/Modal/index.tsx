import * as React from "react";
import ReactDOM from "react-dom";

type Props = {
  onClose?: (e: React.SyntheticEvent) => void;
  children?: JSX.Element | string | React.ReactNode;
  innerWidth?: number;
};

const Backdrop = ({ onClose }: Props) => {
  return (
    <div
      className="position-fixed 
        top-0 
        left-0 
        w-100 
        h-100 
        zindex-modal-backdrop"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, .75)" }}
    />
  );
};

const ModalOverlay = ({ children }: Props) => {
  return (
    <div
      className="position-fixed
      top-50
      start-50
      translate-middle
      w-75
      zindex-dropdown"
    >
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
