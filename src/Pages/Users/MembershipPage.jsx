import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "../Home/Banner";

const MembershipPage = () => {
  return (
    <div className="">
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
          "You Become a Member ,Please Pay for it $100,Then you going a member."
        }
      ></SectionTitle>

      <div className="mb-24">
        <Link to={"/checkOut"} className="font-semibold">
          Dear valued members, we are thrilled to announce an exciting update!
          Your membership has just been upgraded, unlocking a host of exclusive
          benefits and features. Thank you for your continued support! Become a
          member{" "}
          <span className="text-blue-700 font-bold underline btn btn-outline">
            Click here
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MembershipPage;
