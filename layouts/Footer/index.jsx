import React from "react";
import styles from "./styles.module.scss";
const index = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <p>GET YOUR MISSION IN MOTION</p>
      </div>
      <div className={styles.footer__buttons}>
        <button>Get a Quote</button>
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default index;
