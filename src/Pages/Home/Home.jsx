import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HomeCart from "./HomeCart";
import SectionTitle from "../../Shared/SectionTitle";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dev || Home</title>
      </Helmet>

      <Banner />
      <SectionTitle
        title={"Posts"}
        subtitle={"----------Some Good Posts---------"}
      ></SectionTitle>
      <HomeCart />
    </div>
  );
};

export default Home;
