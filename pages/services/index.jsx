import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Banner, { BannerWithVideo } from "@/components/Banner";
import { useSpring, animated } from "react-spring";
import styles from "@/styles/ourServices.module.scss";
import { useMediaQuery } from "react-responsive";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
export const OurServiceDesc = () => {
  return (
    <div className={styles.ourServiceDesc}>
      <p>
        &ldquo;The Art of Grafting Your Story Where Endings Inspire the Word of
        Editing.&quot;
      </p>
    </div>
  );
};
export const OurServicesCard = ({ sideImage, content }) => {
  const { heading, desc, button } = content;
  return (
    <div className={styles.ourServicesCard}>
      <div className={styles.ourServicesCard__content}>
        <div className={styles.ourServicesCard__content__heading}>
          {heading.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
          })}
        </div>
        <div className={styles.ourServicesCard__content__desc}>
          {desc?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <button
          className={styles.ourServicesCard__content__button}
          onClick={() => Router.push(button?.link)}
        >
          {button?.heading}
        </button>
      </div>
      <div className={styles.ourServicesCard__image}>
        <Image
          src={sideImage?.url}
          alt={sideImage?.alt}
          width={700}
          height={700}
          className=" "
        />
      </div>
    </div>
  );
};
export const OurServicesCards = ({ ourServicesCardsData }) => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Example breakpoint
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const ourServicesCards = useSpring({
    // opacity: isMobile ? (scrollY >= 300 ? 1 : 0) : (scrollY >= 400 ? 1 : 0),
    // transform: `translateY(${isMobile ? (scrollY >= 300 ? 0 : 50) : (scrollY >= 900 ? 0 : 50)}px)`,
    filter: scrollY >= 600 ? "grayscale(0)" : "grayscale(1)",
  });
  return (
    <ul className={styles.ourServicesCards}>
      {ourServicesCardsData.cards.map((item, index) => {
        return (
          // <animated.div key={index} style={ourServicesCards}>

          <li key={index}>
            <OurServicesCard
              sideImage={item.sideImage}
              content={item.content}
            />
            <hr />
          </li>
          // </animated.div>
        );
      })}
    </ul>
  );
};
const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Example breakpoint
  const bannerContent = {
    heading: {
      p: ["THE ART", "OF EDITING", ""],
    },
  };
  const ourServicesCardsData = {
    cards: [
      {
        sideImage: {
          url: "/image/OurService/services/EDITING_STUDIO.png",
          alt: "EDITING_STUDIO",
        },
        content: {
          heading: ["EDITING", "STUDIO"],
          desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          ],
          button: {
            heading: "KNOW MORE",
            link: "/",
          },
        },
      },
      {
        sideImage: {
          url: "/image/OurService/services/VIDEO_PRODUCTION.png",
          alt: "VIDEO_PRODUCTION",
        },
        content: {
          heading: ["VIDEO", "PRODUCTION"],
          desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          ],
          button: {
            heading: "KNOW MORE",
            link: "/",
          },
        },
      },
      {
        sideImage: {
          url: "/image/OurService/services/STORY_BOARDING.png",
          alt: "STORY_BOARDING",
        },
        content: {
          heading: ["STORY", "BOARDING"],
          desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          ],
          button: {
            heading: "KNOW MORE",
            link: "/",
          },
        },
      },
      {
        sideImage: {
          url: "/image/OurService/services/DIGITAL_MARKETING.png",
          alt: "DIGITAL_MARKETING",
        },
        content: {
          heading: ["DIGITAL", "MARKETING"],
          desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          ],
          button: {
            heading: "KNOW MORE",
            link: "/",
          },
        },
      },
      {
        sideImage: {
          url: "/image/OurService/services/360_VR_VIDEOS.png",
          alt: "360_VR_VIDEOS",
        },
        content: {
          heading: ["360 VR", "VIDEOS"],
          desc: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
          ],
          button: {
            heading: "KNOW MORE",
            link: "/",
          },
        },
      },
    ],
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const bannerSpring = useSpring({
    opacity: scrollY >= 0 ? 1 : 0,
    transform: `translateY(${scrollY >= 0 ? 0 : 50}px)`,
  });
  const ourServiceDesc = useSpring({
    opacity: isMobile ? (scrollY >= 300 ? 1 : 0) : scrollY >= 300 ? 1 : 0,
    transform: `translateY(${
      isMobile ? (scrollY >= 300 ? 0 : 50) : scrollY >= 400 ? 0 : 50
    }px)`,
  });
  const ourServicesCards = useSpring({
    opacity: isMobile ? (scrollY >= 300 ? 1 : 0) : scrollY >= 400 ? 1 : 0,
    transform: `translateY(${
      isMobile ? (scrollY >= 300 ? 0 : 50) : scrollY >= 900 ? 0 : 50
    }px)`,
  });

  return (
    <Parallax pages={4} ref={ref}>
      <ParallaxLayer
          offset={0}
          speed={1}
          factor={0.5}
          // style={{
          //   backgroundImage: `url(${moon})`,
          //   backgroundSize: 'cover',
          // }}
          sticky={true}
        >
     <Header />
     </ParallaxLayer>
      <div className={styles.ourService}>
        
        <Banner
          scrollDown={() => window.scrollTo(0, 600)}
          data={bannerContent}
        />
        <OurServiceDesc />
        
        <OurServicesCards ourServicesCardsData={ourServicesCardsData} />
      </div>
       <Footer />
    </Parallax>
  );
};

export default Index;
