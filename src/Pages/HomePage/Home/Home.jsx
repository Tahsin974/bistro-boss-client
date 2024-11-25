import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommands from "../ChefRecommands/ChefRecommands";
import About from "../About/About";
import PopularItems from "../PopularItems/PopularItems";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularItems></PopularItems>
      <CallUs></CallUs>
      <ChefRecommands></ChefRecommands>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
