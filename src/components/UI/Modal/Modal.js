import styles from "./Modal.module.css";
import Overlay from "./Overlay";

function Modal(props) {
  return (
    <>
      <div className={`${styles.modal} ${props.isHidden ? styles.hidden : ""}`}>
        {props.children}
      </div>
      <Overlay
        display={props.isHidden ? styles.hidden : ""}
        onCloseModalHandler={props.onCloseModalHandler}
      ></Overlay>
    </>
  );
}

export default Modal;
