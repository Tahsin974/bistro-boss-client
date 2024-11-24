import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommands from "../ChefRecommands/ChefRecommands";
import About from "../About/About";
import PopularItems from "../PopularItems/PopularItems";
import Featured from "../Featured/Featured";

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
    </div>
  );
};

export default Home;
