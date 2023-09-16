import image from "../../../images/background-image.jpg";

import styles from "./BackgroundImage.module.css";

function BackgroundImage() {
  return <img className={styles["background-image"]} src={image}></img>;
}

export default BackgroundImage;
