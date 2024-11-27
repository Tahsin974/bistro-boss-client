import { Parallax } from 'react-parallax';
import './Cover.css'
const Cover = ({ img,coverHeading,subHeading }) => {

  return (

    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={img}
    strength={-200}
>
<div
      className="hero h-[650px]"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content content-size text-neutral-content text-center bg-opacity-60 bg-black ">
        <div className="lg:space-y-9 md:space-y-6 sm:space-y-3 space-y-1 p-8">
          <h1 className="mb-5  cinzel-bold uppercase">{coverHeading}</h1>
          {
            subHeading ?
            <h4 className="cinzel-light mb-5  uppercase">
              {subHeading}
            </h4>

            :
            <p className="mb-5 font-light">
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          }
          
        </div>
      </div>
    </div>
</Parallax>
    
  );
};

export default Cover;
