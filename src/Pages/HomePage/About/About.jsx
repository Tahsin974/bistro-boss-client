import img from '../../../assets/home/chef-service.jpg'
const About = () => {
  return (
    <section className="my-28">
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage:
            `url(${img})`,
          
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="lg:max-w-5xl md:max-w-2xl max-w-xl  lg:p-28 md:p-20 p-6  bg-[#FAF9F6] text-black  space-y-5">
            <h1 className=" lg:text-5xl text-2xl font-bold rye-regular">Bistro Boss</h1>
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quasi eligendi minima, officiis consequuntur aspernatur dolorem suscipit voluptate sequi dicta quaerat culpa, id vel dolores nam totam. Aliquam quasi odio possimus dolore. Neque architecto numquam ducimus necessitatibus eius reiciendis sunt ipsum, alias consectetur dolores illo iure culpa consequatur, perferendis sit!
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
