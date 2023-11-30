import { Helmet } from "react-helmet-async";
import { CiSearch } from "react-icons/ci";
import HomeCart from "./HomeCart";
import SectionTitle from "../../Shared/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [searchResult, setSearchResult] = useState("");
  console.log(searchResult);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("des");

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

      if (sortOrder === "des") {
        return totalVotesB - totalVotesA;
      } else {
        return totalVotesA - totalVotesB;
      }
    });

    setPosts(sortedPosts);
    setSortOrder(sortOrder === "des" ? "asc" : "des");
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  const filteredPosts = posts.filter((post) =>
    post.tag.toLowerCase().includes(searchResult.toLowerCase())
  );
  return (
    <div>
      <Helmet>
        <title>Dev || Home</title>
      </Helmet>

      <div className="mb-10">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://i.ibb.co/7Gygj90/course8-1200x600.jpg")`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Dev- Forum</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi In deleniti eaque aut
                repudiandae et a id nisi
              </p>
              <div className="join">
                <input
                  onChange={(e) => setSearchResult(e.target.value)}
                  className="input input-bordered join-item"
                  placeholder="Search By Tags"
                />
                <button className="btn join-item">
                  Search
                  <CiSearch />
                </button>
              </div>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>

      <SectionTitle
        title={"Posts"}
        subtitle={"----------Some Posts Fore ---------"}
      ></SectionTitle>
      <div></div>
      <div>
        <button className="btn btn-outline" onClick={handleSortByPopularity}>
          Sort by Vote
        </button>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 mb-24 gap-5">
          {searchResult
            ? filteredPosts.map((item) => (
                <HomeCart key={item._id} item={item} />
              ))
            : posts.map((item) => <HomeCart key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
