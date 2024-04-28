import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Image from 'next/image';
import HeaderWithOverlay from '@/components/HeaderWithOverlay';

export const OurWorkCard = ({card}) => {
  const { video } = card;
  const { src, alt } = video;
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
          videoRef.current.play(); // Start playing the video on hover
      }
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef.current) {
          videoRef.current.pause(); // Pause the video when not hovered
          videoRef.current.currentTime = 0; // Reset video playback to the beginning
      }
  };

  return (
      <div className={styles.ourWorkCard}>
          <video
              ref={videoRef}
              src={src}
              alt={alt}
              controls={false} // Hide controls when hovered
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          />
      </div>
  );
}
const OurWork = () => {
  const ourWorkData = {
    heading:"Our Work",
    cards:[
      {
        img:{
          url:"/image/OurWork/work_1.png",
          alt:"work_1"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_2.png",
          alt:"work_2"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_1.png",
          alt:"work_1"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_2.png",
          alt:"work_2"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_6.png",
          alt:"work_6"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_3.png",
          alt:"work_3"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_4.png",
          alt:"work_4"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_6.png",
          alt:"work_6"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_3.png",
          alt:"work_3"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_4.png",
          alt:"work_4"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_7.png",
          alt:"work_7"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_5.png",
          alt:"work_5"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_6.png",
          alt:"work_6"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_7.png",
          alt:"work_7"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_1.png",
          alt:"work_1"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_2.png",
          alt:"work_2"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_1.png",
          alt:"work_1"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_2.png",
          alt:"work_2"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_1.png",
          alt:"work_1"
        }
      },
      {
        img:{
          url:"/image/OurWork/work_2.png",
          alt:"work_2"
        }
      },
    ]
  }
  const cards = {
    video:{
      src:"/video/group_discussion.mp4",
      alt:"group_discussion"
    }
  }
  return (
    <div className={styles.OurWork}>
      <div className={styles.OurWork__header}>
        <h2>{ourWorkData.heading}</h2>
        <h3 className={styles.OurClients__header__sub}>
        <HeaderWithOverlay headingImage={{heading:"/image/OurWork/heading.png", heading_overlay:"/image/OurWork/heading_layer.png"}}/>
        </h3>
      </div>
      <ul className={styles.OurWork__lists}>
        {ourWorkData.cards.map((card,index) => {
          return (
            <li key={index} className={`${styles.OurWork__lists__card} hover:scale-150`}>
              {/* <Image
                src={card.img.url}
                alt={card.img.alt}
                width={200}
                height={200}
              /> */}
              <OurWorkCard card={cards}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurWork;
