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

      <Banner
        image={"https://i.ibb.co/7Gygj90/course8-1200x600.jpg"}
        title={"Welcome to Dev- Forum"}
        subtitle={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi"
        }
      />
      <SectionTitle
        title={"Posts"}
        subtitle={"----------Some Posts Fore ---------"}
      ></SectionTitle>
      <HomeCart />
    </div>
  );
};

export default Home;
