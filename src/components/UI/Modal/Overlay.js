import styles from "./Overlay.module.css";

function Overlay(props) {
  return (
    <div
      className={`${styles.overlay} ${props.display}`}
      onClick={props.onCloseModalHandler}
    ></div>
  );
}

export default Overlay;
