"use client";
import React from "react";
import styles from "./testCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import user1 from "./../../../../public/assets/user1.png";
import user2 from "./../../../../public/assets/user2.png";
import user3 from "./../../../../public/assets/user3.png";
import user4 from "./../../../../public/assets/user4.png";

const TestCarousel = () => {
  const data = [
    {
      user: "Vallabh Badale",
      img: user1,
      company: "",
      stars: "⭐⭐⭐⭐⭐",
      desc: "My family and I had the most incredible experience at Rajkalp Resort! From the moment we arrived, we were greeted with warm hospitality and impeccable service. The resort's stunning surroundings, coupled with luxurious amenities, made our stay truly unforgettable. We can't wait to return for another relaxing getaway!",
    },
    {
      user: "Pramod Mehta",
      img: user2,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "As a frequent traveler, I've had the pleasure of staying at many resorts, but none have quite matched the level of tranquility and serenity found at Rajkalp Resort. The lush greenery, peaceful ambiance, and top-notch facilities exceeded all of my expectations. I highly recommend Rajkalp Resort for an unparalleled experience.",
    },
    {
      user: "Arvind Mewar",
      img: user3,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Rajkalp Resort is a hidden gem nestled in nature's embrace. During my stay, I was amazed by the attention to detail in every aspect of the resort, from the elegant accommodations to the delectable cuisine. The staff went above and beyond to ensure my comfort and satisfaction throughout my visit.",
    },
    {
      user: "Pramod Jain",
      img: user4,
      company: " ",
      stars: "⭐⭐⭐⭐⭐",
      desc: "Words cannot do justice to the beauty and tranquility of Rajkalp Resort. From the breathtaking views of the surrounding mountains to the soothing sounds of nature, every moment spent at this paradise felt like a dream. Whether indulging in a relaxing spa treatment or exploring the place, there's something for everyone to enjoy at Rajkalp Resort.",
    },
  ];

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        breakpoints={{
          464: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <center>
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
                  <Image
                    src={item.img}
                    className={styles.userImg}
                    width={1000}
                    style={{ height: "auto" }}
                    alt="User"
                  />
                  <div className={styles.userInfo}>
                    <div className={styles.userName}>{item.user}</div>
                    <div className={styles.userCompany}>{item.company}</div>
                  </div>
                  <div className={styles.review}>{item.desc}</div>
                </div>
              </div>
            </center>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestCarousel;
