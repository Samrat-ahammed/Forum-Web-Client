import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useEffect, useState } from "react";

const HomeCart = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSortByPopularity = () => {
    const sortedPosts = [...posts];

    sortedPosts.sort((a, b) => {
      const totalVotesA = a.upVote - a.downVote;
      const totalVotesB = b.upVote - b.downVote;

      if (sortOrder === "desc") {
        return totalVotesB - totalVotesA;
      } else {
        return totalVotesA - totalVotesB;
      }
    });

    setPosts(sortedPosts);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <button className="btn btn-outline" onClick={handleSortByPopularity}>
        Sort by
      </button>
      <div className="mt-24 mb-24 grid grid-cols-4 gap-5">
        {posts?.map((item) => (
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
                <h2>
                  Votes:-
                  {item.downVote || item.downVote
                    ? item.upVote + item.downVote
                    : "Give the Vote"}
                </h2>
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

export default HomeCart;
