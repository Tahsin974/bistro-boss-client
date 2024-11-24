import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import CheifService from "../CheifService/CheifService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CheifService></CheifService>
      <CallUs></CallUs>
    </div>
  );
};

export default Home;
