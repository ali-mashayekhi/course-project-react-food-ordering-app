import { Fragment } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {createPortal(
        <Backdrop onHideCartHandler={props.onHideCartHandler} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.onHideCartHandler}></div>
  );
}
