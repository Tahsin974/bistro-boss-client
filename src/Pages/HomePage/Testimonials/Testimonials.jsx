import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// import React Hooks and Axios
import { useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "react-rating";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  }, []);
  return (
    <section className="my-28 space-y-10">
      <SectionTitle
        subHeading="What Our Clients Say"
        Heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper
      loop={true}
       navigation={true} 
       modules={[Navigation]}
        className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="items-center flex flex-col justify-center lg:mx-32 md:mx-32 sm:mx-28 mx-20 space-y-6 text-center">
              <p className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl">
                

                <Rating
                  initialRating={review.rating}

                  emptySymbol={
                    <IoMdStarOutline className="text-yellow-600"/>
                  }
                  placeholderSymbol={
                    
                    <IoMdStarHalf className="text-yellow-600"/>

                  }
                  fullSymbol={
                    <IoMdStar className="text-yellow-600"/>
                  }
                  readonly
                />
              </p>
              <FaQuoteLeft className="lg:text-7xl md:text-7xl sm:text-6xl text-5xl" />

              <p className="font-light">{review.details}</p>
              <h3 className="text-yellow-600 lg:text-3xl md:text-2xl text-xl cormorant-garamond-semibold">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
