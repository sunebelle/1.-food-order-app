import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = ({ onCloseCart }) => {
  return <div onClick={onCloseCart} className="backdrop" />;
};

const ModalOverlay = ({ children }) => {
  return <div className="modal">{children}</div>;
};

const Modal = ({ children, onCloseCart }) => {
  const portalEl = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={onCloseCart} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay> {children} </ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
