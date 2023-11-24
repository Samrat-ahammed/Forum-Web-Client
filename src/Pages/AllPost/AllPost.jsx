import { Helmet } from "react-helmet-async";
import PostCard from "./PostCard";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "../Home/Banner";

const AllPost = () => {
  return (
    <div>
      <Helmet>
        <title>Dev || All-Post</title>
      </Helmet>
      <Banner
        image={"https://i.ibb.co/Qp3zT5G/5350230.jpg"}
        title={""}
        subtitle={""}
      />
      <SectionTitle title={"All Post"}></SectionTitle>
      <div className="grid grid-cols-4 gap-5 my-24">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </div>
  );
};

export default AllPost;
