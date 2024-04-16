import React from "react";
import styles from "./styles.module.scss";
import Image from 'next/image';
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
  return (
    <div className={styles.OurWork}>
      <div className={styles.OurWork__header}>
        <h2>{ourWorkData.heading}</h2>
      </div>
      <ul className={styles.OurWork__lists}>
        {ourWorkData.cards.map((card,index) => {
          return (
            <li key={index} className={styles.OurWork__lists__card}>
              <Image
                src={card.img.url}
                alt={card.img.alt}
                width={200}
                height={200}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurWork;
