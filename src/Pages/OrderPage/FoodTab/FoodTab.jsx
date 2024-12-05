import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ItemCard from "../../../Components/ItemCard/ItemCard";
import './FoodTab.css'
const FoodTab = ({items}) => {
    
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
           
            600: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {
                items.map(item =>
                    <SwiperSlide
                    key={item._id}
                    ><ItemCard
                    item={item}
                    isPrice={true}
                    ></ItemCard></SwiperSlide>
                    )
                }
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        
        // <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center px-2">
        //         {
        //         items.map(item => <ItemCard
        //         key={item._id}
        //         item={item}
        //         isPrice={true}
        //         ></ItemCard>)
        //         }
        //     </div>
    );
};

export default FoodTab;