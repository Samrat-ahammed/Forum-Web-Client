import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import HomeCart from "./HomeCart";
import SectionTitle from "../../Shared/SectionTitle";
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dev || Home</title>
      </Helmet>

      <Navbar />
      <Banner />
      <SectionTitle></SectionTitle>
      <HomeCart />
      <Footer />
    </div>
  );
};

export default Home;
