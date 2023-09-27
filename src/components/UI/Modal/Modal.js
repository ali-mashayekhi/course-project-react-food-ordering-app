import styles from "./Modal.module.css";
import Overlay from "./Overlay";
import ReactDOM from "react-dom";

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${styles.modal} ${props.isHidden ? styles.hidden : ""}`}
        >
          {props.children}
        </div>,
        document.getElementById("modal")
      )}
      <Overlay
        display={props.isHidden ? styles.hidden : ""}
        onCloseModalHandler={props.onCloseModalHandler}
      ></Overlay>
    </>
  );
}

export default Modal;
