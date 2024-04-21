import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import HeaderWithOverlay from '@/components/HeaderWithOverlay';
const OurClients = () => {
  const ourClientData = {
    heading: "Our Clients",
    cards: [
      {
        img: {
          src: "/image/OurClients/facebook.png",
          alt: "facebook",
        },
      },
      {
        img: {
          src: "/image/OurClients/Microsoft.png",
          alt: "Microsoft",
        },
      },
      {
        img: {
          src: "/image/OurClients/mash.png",
          alt: "mash",
        },
      },
      {
        img: {
          src: "/image/OurClients/google.png",
          alt: "google",
        },
      },
      {
        img: {
          src: "/image/OurClients/facebook.png",
          alt: "facebook",
        },
      },
      {
        img: {
          src: "/image/OurClients/Microsoft.png",
          alt: "Microsoft",
        },
      },
      {
        img: {
          src: "/image/OurClients/mash.png",
          alt: "mash",
        },
      },
      {
        img: {
          src: "/image/OurClients/google.png",
          alt: "google",
        },
      },
      {
        img: {
          src: "/image/OurClients/facebook.png",
          alt: "facebook",
        },
      },
      {
        img: {
          src: "/image/OurClients/Microsoft.png",
          alt: "Microsoft",
        },
      },
      {
        img: {
          src: "/image/OurClients/mash.png",
          alt: "mash",
        },
      },
      {
        img: {
          src: "/image/OurClients/google.png",
          alt: "google",
        },
      },
      {
        img: {
          src: "/image/OurClients/facebook.png",
          alt: "facebook",
        },
      },
      {
        img: {
          src: "/image/OurClients/Microsoft.png",
          alt: "Microsoft",
        },
      },
      {
        img: {
          src: "/image/OurClients/mash.png",
          alt: "mash",
        },
      },
      {
        img: {
          src: "/image/OurClients/google.png",
          alt: "google",
        },
      },
      {
        img: {
          src: "/image/OurClients/facebook.png",
          alt: "facebook",
        },
      },
      {
        img: {
          src: "/image/OurClients/Microsoft.png",
          alt: "Microsoft",
        },
      },
      {
        img: {
          src: "/image/OurClients/mash.png",
          alt: "mash",
        },
      },
      {
        img: {
          src: "/image/OurClients/google.png",
          alt: "google",
        },
      },
    ],
  };
  return (
    <div className={styles.OurClients}>
      <div className={styles.OurClients__header}>
        <h2>{ourClientData.heading}</h2>
        <h3 className={styles.OurClients__header__sub}>
        <HeaderWithOverlay headingImage={{heading:"/image/OurClients/heading.png", heading_overlay:"/image/OurClients/heading_layer.png"}}/>
        </h3>
      </div>
      <ul className={styles.OurClients__lists}>
        {ourClientData.cards.map((card, index) => {
          return (
            <li key={index} className={styles.OurClients__lists__card}>
              <Image
                src={card.img.src}
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

export default OurClients;
