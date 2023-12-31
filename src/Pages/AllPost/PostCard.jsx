import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div>
      <Link
        to={"/postDetails"}
        className="card card-compact bg-slate-400 shadow-xl"
      >
        <div className=" my-4 mx-4">
          <div className="flex items-center space-x-4">
            <img
              className="rounded-full h-[50px]"
              src="https://i.ibb.co/vmTky5j/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg"
              alt=""
            />
            <div>
              <h1 className="font-bold">Suborna ahammed</h1>
              <h4 className="text-sm font-semibold">11:30 Hour</h4>
            </div>
          </div>
          <div className="divider divider-neutral"></div>
        </div>

        <div className="card-body">
          <h2 className="card-title font-bold"> Post : Jwt Token</h2>

          <div className="flex justify-between text-white font-semibold">
            <h2>Tags : Jwt</h2>
            <h2> Votes:- 4</h2>
          </div>
          <h2 className="text-white">Comments :- ...</h2>
        </div>
        <Link to={"/postDetails"} className="card-actions justify-end">
          <button className="btn btn-ghost">
            <FaArrowCircleRight className="text-3xl" />
          </button>
        </Link>
      </Link>
    </div>
  );
};

export default PostCard;
