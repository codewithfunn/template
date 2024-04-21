import Image from "next/image";
import styles from '@/styles/Home.module.scss';
import Banner, { BannerWithVideo } from "@/components/Banner";
import OurService from '@/components/Home/OurService';
import OurWork from '@/components/Home/OurWork';
import OurClients from '@/components/Home/OurClients';
import Testimonial from '@/components/Home/Testimonial';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Example breakpoint

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bannerSpring = useSpring({
    opacity: scrollY >= 0 ? 1 : 0,
    transform: `translateY(${scrollY >= 0 ? 0 : 50}px)`,
  });

  const bannerWithVideoSpring = useSpring({
    opacity: isMobile ? (scrollY >= 300 ? 1 : 0) : (scrollY >= 600 ? 1 : 0),
    transform: `translateY(${isMobile ? (scrollY >= 300 ? 0 : 50) : (scrollY >= 600 ? 0 : 50)}px)`,
  });

  const ourServiceSpring = useSpring({
    opacity: isMobile ? (scrollY >= 700 ? 1 : 0) : (scrollY >= 900 ? 1 : 0),
    transform: `translateY(${isMobile ? (scrollY >= 700 ? 0 : 50) : (scrollY >= 900 ? 0 : 50)}px)`,
  });

  const ourWorkSpring = useSpring({
    opacity: isMobile ? (scrollY >= 820 ? 1 : 0) : (scrollY >= 1020 ? 1 : 0),
    transform: `translateY(${isMobile ? (scrollY >= 820 ? 0 : 50) : (scrollY >= 1020 ? 0 : 50)}px)`,
  });

  const testimonialSpring = useSpring({
    opacity: isMobile ? (scrollY >= 1100 ? 1 : 0) : (scrollY >= 1300 ? 1 : 0),
    transform: `translateY(${isMobile ? (scrollY >= 1100 ? 0 : 50) : (scrollY >= 1300 ? 0 : 50)}px)`,
  });

  const ourClientsSpring = useSpring({
    opacity: isMobile ? (scrollY >= 1300 ? 1 : 0) : (scrollY >= 1500 ? 1 : 0),
    transform: `translateY(${isMobile ? (scrollY >= 1300 ? 0 : 50) : (scrollY >= 1500 ? 0 : 50)}px)`,
  });

  return (
    <div className={styles.__container}>
      <animated.div style={bannerSpring}>
        <Banner scrollDown={() => window.scrollTo(0, 600)} />
      </animated.div>
      <animated.div style={bannerWithVideoSpring}>
        <BannerWithVideo />
      </animated.div>
      <animated.div style={ourServiceSpring}>
        <OurService />
      </animated.div>
      <animated.div style={ourWorkSpring}>
        <OurWork />
      </animated.div>
      <animated.div style={testimonialSpring}>
        <Testimonial />
      </animated.div>
      <animated.div style={ourClientsSpring}>
        <OurClients />
      </animated.div>
    </div>
  );
}
