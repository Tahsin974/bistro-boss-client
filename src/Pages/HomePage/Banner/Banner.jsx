import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/Banner/06.png";
import img2 from "../../../assets/Banner/02.jpg";
import img3 from "../../../assets/Banner/03.png";
import img4 from "../../../assets/Banner/04.jpg";
import img5 from "../../../assets/Banner/05.png";
import img6 from "../../../assets/Banner/01.jpg";
import './Banner.css'

const Banner = () => {
    return (
        <section>
            <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            
            >
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
                
                <div>
                    <img src={img5} />
                    
                </div>
                <div>
                    <img src={img6} />
                    
                </div>
                
            </Carousel>
        </section>
    );
};

export default Banner;