import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
// import { useEffect, useState } from "react";

const HomeCart = ({ item }) => {
  const { _id, author_image, post_title, post_time, downVote, upVote, tag } =
    item || {};
  return (
    <div>
      <div>
        <Link
          to={`postDetails/${_id}`}
          className="card card-compact bg-slate-400 shadow-xl"
        >
          <div className="my-4 mx-4">
            <div className="flex items-center space-x-4">
              <img
                className="rounded-full h-[50px]"
                src={author_image}
                alt=""
              />
              <div>
                <h1 className="font-bold">{post_title}</h1>
                <h4 className="text-sm font-semibold">{post_time}</h4>
              </div>
            </div>
            <div className="divider divider-neutral"></div>
          </div>

          <div className="card-body">
            <h2 className="card-title font-bold"> Post : {post_title}</h2>

            <div className="flex justify-between text-white font-semibold">
              <h2 className="underline text-blue-700">Tags : {tag}</h2>
              <h2>
                Votes:-
                {downVote || upVote ? upVote + downVote : "Give the Vote"}
              </h2>
            </div>
            <h2 className="text-white">Comments :- ...</h2>
          </div>
          <Link to={`postDetails/${_id}`} className="card-actions justify-end">
            <button className="btn btn-ghost">
              <FaArrowCircleRight className="text-3xl" />
            </button>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default HomeCart;
