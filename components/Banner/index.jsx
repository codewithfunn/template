import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Modal from "@/components/Modal";

export const Video = () => {
  return (
    <video className={styles.video} autoPlay muted loop>
      <source src="/video/group_discussion.mp4" type="video/mp4" />
    </video>
  );
};
export const BannerWithVideo = () => {
  return (
    <div className={styles.bannerWithVideo}>
      <span className={styles.bannerWithVideo__Button}>
        {/* <button className="shadow-2xl border-gray-500 ">
            <FaPlay/>
        </button> */}
        <Modal enableCloseButton={true} showButton={true} buttonIcon={<FaPlay/>} showModal={true}>
          <Video />
        </Modal>
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
const index = ({ scrollDown }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <p>YOUR STORIES</p>
        <p>OUR CREATIVE</p>
        <p>EMBRACE</p>
      </div>
      <div className={styles.banner__sideBar} onClick={() => scrollDown()}>
        <span>SCROLL DOWN</span>
      </div>
    </div>
  );
};

export default index;
