import fearturedImg from '../../../assets/home/featured.jpg'
import Button from '../../../Components/Button/Button';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Featured = () => {
  return (
    <section
      className="hero min-h-screen bg-fixed my-28 "
      style={{
        backgroundImage:
          `url(${fearturedImg})`,
      }}
    >
        
      <div className="hero-overlay bg-opacity-60 ">
      
      </div>
      
      <div className="hero-content text-white ">
        
        <div className="max-w-4xl space-y-10">
        <SectionTitle
      subHeading='Check it out'
      Heading='Featured Item'
      ></SectionTitle>
          <div className="grid md:grid-cols-2 gap-14 items-center">
          <img src={fearturedImg}  />
          <div>
            <h3 className='text-xl'>March 20, 2023</h3>
            <h2 className='text-2xl font-semibold'>WHERE CAN I GET SOME?</h2>
          <p className="mb-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, animi! Quae hic laudantium, animi assumenda odit ratione qui id, voluptates repudiandae obcaecati officiis. Sapiente explicabo nam qui voluptates esse eligendi.
          </p>
          <Button
          color='white'
          >Read More</Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
