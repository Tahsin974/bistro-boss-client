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
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
        <div className="my-24">
        <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        Heading={"ORDER ONLINE"}
        ></SectionTitle>
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
            <h2 className='text-3xl  rye-regular text-center -mt-14 text-white'>SALADS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="category" />
            <h2 className='text-3xl  rye-regular text-center -mt-14 text-white'>PIZZAS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="category" />
            <h2 className='text-3xl  rye-regular text-center -mt-14 text-white'>SOUPS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="category" />
            <h2 className='text-3xl  rye-regular text-center -mt-14 text-white'>DESSERTS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="category" />
            <h2 className='text-3xl  rye-regular text-center -mt-14 text-white'>SALADS</h2>
        </SwiperSlide>
      </Swiper>
        </div>

      
    </>
    );
};

export default Category;