import React from "react";
import styles from "./styles.module.scss";
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";
const OurServiceCard = ({
  icon,
  backgroundImage,
  topHeading,
  heading,
  desc,
}) => {
  const isMedium = useMediaQuery({ query: "(max-width:1300px)" });
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <div className={`${styles.ourServiceCard} shadow-md shadow-pink-300/15 duration-200 ease-in-out  hover:shadow-xl hover:shadow-pink-300/25 hover:delay-200  cursor-pointer`} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <div className={styles.ourServiceCard__content}>
        <i className={styles.ourServiceCard__content__icon}>
          <Image src={icon.src} alt={icon.alt} width={200} height={200} />
        </i>
        <h3 className={styles.ourServiceCard__content__heading}>{heading}</h3>
        <p className={styles.ourServiceCard__content__desc}>{isTablet?desc.substring(0, 150)+"...": desc}</p>
      </div>
    </div>
  );
};
const OurService = () => {
  const cards = [
    {
      icon: {
        src: "/icons/videography.png",
        alt: "videography",
      },
      backgroundImage: {
        src: "/image/OurService/card/Video_Production.png",
        alt: "Video_Production",
      },
      topHeading: "Crafting Cinematic Narratives",
      heading: "Video Production",
      desc: "In the heart of Bee Town Films, creativity flows like a river. Our video production team doesn't just film scenes; they weave tales that resonate with audiences. From capturing a child's first steps (include company's first step) to the crescendo of a love story, every frame is a brushstroke on the canvas of storytelling.",
    },
    {
      icon: {
        src: "/icons/music.png",
        alt: "music",
      },
      backgroundImage: {
        src: "/image/OurService/card/Editing_Studio.png",
        alt: "Editing_Studio",
      },
      topHeading: "Where Ideas Take Flight",
      heading: "Editing Studio",
      desc: "Step into the Editing Studio at Bee Town Films, and you step into a realm of transformation. Here, raw footage finds its rhythm, chaos turns to clarity, and moments evolve into masterpieces. Our editors are the architects of emotion, sculpting stories with the precision of a maestro conducting a symphony.",
    },
    {
      icon: {
        src: "/icons/storyboard.png",
        alt: "storyboard",
      },
      backgroundImage: {
        src: "/image/OurService/card/Story_Boarding.png",
        alt: "Story_Boarding",
      },
      topHeading: "Sketches to Spectacles",
      heading: "Story Boarding",
      desc: "Before a single frame is shot, the magic begins in our Storyboarding Room. Here, Ideas become sketches, and sketches become blueprints for cinematic adventures. It's where Imagination meets structure, laying the foundation for tales that will transport audiences to new worlds",
    },
    {
      icon: {
        src: "/icons/storyboard.png",
        alt: "storyboard",
      },
      backgroundImage: {
        src: "/image/OurService/card/Story_Boarding.png",
        alt: "Story_Boarding",
      },
      topHeading: "Connecting through Creativity",
      heading: "Digital MarketingNG",
      desc: "At Bee Town Films, our commitment to storytelling doesn't end with the final cut. In our Digital Marketing Hub, a dedicated team crafts campaigns that bring stories to life in the digital realm. From social media sparks to email campaigns that",
    },
    {
      icon: {
        src: "/icons/business-people.png",
        alt: "business-people",
      },
      backgroundImage: {
        src: "/image/OurService/card/Team_Collaboration.png",
        alt: "Team_Collaboration",
      },
      topHeading: "Collaboration in Action",
      heading: "Team Collaboration",
      desc: "What sets Bee Town Films apart is our collaborative spirit. Across every service we offer. from production to editing to marketing, our team comes together as a hormonious ensemble. We believe that the best stories are born from olverse voices united in a singular vision.",
    },
  ];
  return (
    <div className={styles.ourService}>
      <div className={styles.ourService__header}>
        <h2>OUR SERVICES</h2>
      </div>
      <ul className={styles.ourService__cards}>
        {cards.map((item, index) => {
          return (
            <li key={index}>
              <div className={styles.ourServiceCard__topHeading}>
                <h3 className={"divide-x-2"}>&quot; {item?.topHeading}&quot;</h3>
              </div>
              <OurServiceCard {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurService;
