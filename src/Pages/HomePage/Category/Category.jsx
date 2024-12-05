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
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
        <section className="my-24 space-y-10">
        <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        Heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          550: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10  "
      >
        <SwiperSlide>
            <img src={slide1} alt="category" />
            <h2 className='lg:text-3xl md:text-3xl sm:text-3xl text-xl  rye-regular  lg:-mt-14 md:-mt-14 sm:-mt-14 -mt-10 text-center text-white'>SALADS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="category" />
            <h2 className='lg:text-3xl md:text-3xl sm:text-3xl text-xl  rye-regular  lg:-mt-14 md:-mt-14 sm:-mt-14 -mt-10 text-center text-white'>PIZZAS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="category" />
            <h2 className='lg:text-3xl md:text-3xl sm:text-3xl text-xl  rye-regular  lg:-mt-14 md:-mt-14 sm:-mt-14 -mt-10 text-center text-white'>SOUPS</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="category" />
            <h2 className='lg:text-3xl md:text-3xl sm:text-3xl text-xl  rye-regular text-center lg:-mt-14 md:-mt-14 sm:-mt-14 -mt-10 text-white'>DESSERTS</h2>
        </SwiperSlide>
      </Swiper>
        </section>

      
    </>
    );
};

export default Category;