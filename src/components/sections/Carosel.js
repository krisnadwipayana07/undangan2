import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function App() {
  const list = Array(17).fill();
  return (
    <Box py="10" textAlign="center" bgColor="#BBB08F" color="white">
      <Text fontFamily="Great Vibes" py="5" fontSize="2em">
        Sepenggal Kisah Kami
      </Text>
      <Text fontFamily="Philosopher" mb="5">
        Pertemuan terjadi bukan sekedar untuk saling mengerti tapi untuk saling
        melengkapi
      </Text>
      <Box>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {list.map((item, key) => (
            <SwiperSlide key={key}>
              <Image
                src={"/assets/potrait/" + (key + 1) + ".jpg"}
                alt={"image " + item}
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
