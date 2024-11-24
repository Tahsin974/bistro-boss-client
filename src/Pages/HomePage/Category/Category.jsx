import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Category.css'

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide4.jpg";

const Category = () => {
    return (
        <>

        <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10 "
      >
        <SwiperSlide>
            <img src={slide1} alt="category" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="category" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="category" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="category" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="category" />
        </SwiperSlide>
      </Swiper>

      
    </>
    );
};

export default Category;