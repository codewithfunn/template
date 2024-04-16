import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export const BannerWithVideo = () => {
  return (
    <div className={styles.bannerWithVideo}>
      <span className={styles.bannerWithVideo__Button}>
        <button className="shadow-2xl border-gray-500 ">
            <FaPlay/>
        </button>
      </span>
      <span className={styles.bannerWithVideo__video}>
        <Image
          src={"/video/bannerVideo_1.png"}
          width={1000}
          height={1000}
          alt="banner"
        />
      </span>
    </div>
  );
};
const index = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <p>YOUR STORIES</p>
        <p>OUR CREATIVE</p>
        <p>EMBRACE</p>
      </div>
      <div className={styles.banner__sideBar}>
        <span>SCROLL DOWN</span>
      </div>
    </div>
  );
};

export default index;