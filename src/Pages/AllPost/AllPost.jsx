import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "../Home/Banner";
import usePost from "../../CustomHooks/usePost";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const AllPost = () => {
  const [post] = usePost();

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
        {post?.map((item) => (
          <Link
            key={item._id}
            to={`postDetails/${item._id}`}
            className="card card-compact bg-slate-400 shadow-xl"
          >
            <div className=" my-4 mx-4">
              <div className="flex items-center space-x-4">
                <img
                  className="rounded-full h-[50px]"
                  src={item.author_image}
                  alt=""
                />
                <div>
                  <h1 className="font-bold">{item.post_title}</h1>
                  <h4 className="text-sm font-semibold">{item.post_time}</h4>
                </div>
              </div>
              <div className="divider divider-neutral"></div>
            </div>

            <div className="card-body">
              <h2 className="card-title font-bold">
                {" "}
                Post : {item.post_title}
              </h2>

              <div className="flex justify-between text-white font-semibold">
                <h2>Tags : Jwt</h2>
                <h2> Votes:- {item.upVote + item.downVote}</h2>
              </div>
              <h2 className="text-white">Comments :- ...</h2>
            </div>
            <Link
              to={`postDetails/${item._id}`}
              className="card-actions justify-end"
            >
              <button className="btn btn-ghost">
                <FaArrowCircleRight className="text-3xl" />
              </button>
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
