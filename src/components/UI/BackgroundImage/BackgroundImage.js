import image from "../../../images/background-image.jpg";

import styles from "./BackgroundImage.module.css";

function BackgroundImage() {
  return (
    <img
      className={styles["background-image"]}
      src={image}
      alt="resturant table with diffrent food on it"
    ></img>
  );
}

export default BackgroundImage;
