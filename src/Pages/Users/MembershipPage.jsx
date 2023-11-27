import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "../Home/Banner";

const MembershipPage = () => {
  return (
    <div>
      <Banner
        image={"https://i.ibb.co/Yk4gPm3/course11-1-1200x600.jpg"}
        title={"Join us on this exciting journey today"}
        subtitle={
          "Unlock exclusive content, features, and benefits by becoming a member of our community.Join us now to enjoy a premium experience!"
        }
      />

      <SectionTitle
        title={" Become a Member ? "}
        subtitle={
          "You Become a Member ,please Pay for it,then you going a member."
        }
      ></SectionTitle>

      <div>
        <Link to={"/checkOut"}>go to checkOut</Link>
      </div>
    </div>
  );
};

export default MembershipPage;
