import styles from "./Overlay.module.css";
import ReactDOM from "react-dom";

function Overlay(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${styles.overlay} ${props.display}`}
          onClick={props.onCloseModalHandler}
        ></div>,
        document.getElementById("ovelay")
      )}
    </>
  );
}

export default Overlay;
