import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import HeaderWithOverlay from '@/components/HeaderWithOverlay'
// import './styles.css';

// import required modules
import { Pagination, Navigation ,Autoplay} from "swiper/modules";

import styles from "./styles.module.scss";

export const TestimonialCard = ({ icon, desc, link }) => {
  return (
    <div className={styles.testimonialCard}>
      <i>
        <Image src={icon.src} alt={icon.alt} width={100} height={100} />
      </i>
      <p>{desc}</p>
      <Link href={link}>Read More</Link>
    </div>
  );
};
const Testimonial = () => {
  const TestimonialData = {
    heading: "Testimonial",
    cards: [
      {
        icon: {
          src: "/image/OurTestimonial/icon/watch.png",
          alt: "watch",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        link: "/",
      },
      {
        icon: {
          src: "/image/OurTestimonial/icon/perfume.png",
          alt: "perfume",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        link: "/",
      },
      {
        icon: {
          src: "/image/OurTestimonial/icon/perfume_2.png",
          alt: "perfume_2",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        link: "/",
      },
      {
        icon: {
          src: "/image/OurTestimonial/icon/watch.png",
          alt: "watch",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        link: "/",
      },
      {
        icon: {
          src: "/image/OurTestimonial/icon/perfume.png",
          alt: "perfume",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        link: "/",
      },
      {
        icon: {
          src: "/image/OurTestimonial/icon/perfume_2.png",
          alt: "perfume_2",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        link: "/",
      },
    ],
  };
  return (
    <div className={styles.Testimonial}>
      <div className={styles.Testimonial__header}>
        <h2>OUR Testimonial</h2>
        <h3 className={styles.OurClients__header__sub}>
        <HeaderWithOverlay headingImage={{heading:"/image/OurTestimonial/heading.png", heading_overlay:"/image/OurTestimonial/heading_layer.png"}}/>
        </h3>
      </div>
      <div className={styles.Testimonial__sideBar}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
          {TestimonialData?.cards.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${styles.TestimonialCardWrapper} cursor-pointer `}
              >
                <TestimonialCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
