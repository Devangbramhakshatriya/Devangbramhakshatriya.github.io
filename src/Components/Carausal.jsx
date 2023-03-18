
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { background, Box, Button, HStack, Image, Input, Text} from "@chakra-ui/react";
import {SlHandbag} from "react-icons/sl"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import {Link as RouterLink} from "react-router-dom";
import { extendTheme } from '@chakra-ui/react'
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})


export default function Carousal() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
            
            <SwiperSlide>
              
            </SwiperSlide>
        
        {/* <SwiperSlide><Image src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/n/hnejhfeuh.jpg" alt=""/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}