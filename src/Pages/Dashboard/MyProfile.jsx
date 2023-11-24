import { Helmet } from "react-helmet-async";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";

const MyProfile = () => {
  return (
    <div className="text-center space-y-5">
      <Helmet>
        <title>Dev || Profile</title>
      </Helmet>
      <div className="flex items-center mx-auto justify-center">
        <div className="space-y-3">
          <img
            className="rounded-full h-[150px] mx-auto border-2 border-indigo-500"
            src="https://i.ibb.co/vXcHxQY/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
            alt=""
          />
          <h2 className="ustify-center text-3xl font-bold text-emerald-950">
            Samira Akter
          </h2>
          <h4 className="font-semibold">Samira@gmail.com</h4>
          <h4 className="font-semibold">Badges : Gold</h4>
          <div className="divider w-[500px] divider-neutral"></div>
        </div>
      </div>
      {/* cart.......... */}
      <div className="text-2xl font-semibold ">
        <h4>Recent Post</h4>
        <div className="divider divider-warning"></div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="card bg-stone-200 text-black">
          <div className="card-body">
            <h2 className="card-title">What is JWT</h2>
            <p>
              the algorithm specified in the header, and sign that. JWTs are
              often used in authentication and authorization protocols. When a
            </p>
            <Link to={"/postDetails"} className="card-actions justify-end">
              <button className="btn btn-ghost">
                <FaArrowCircleRight className="text-3xl" />
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg-stone-200 text-black">
          <div className="card-body">
            <h2 className="card-title">What is JWT</h2>
            <p>
              the algorithm specified in the header, and sign that. JWTs are
              often used in authentication and authorization protocols. When a
            </p>
            <Link to={"/postDetails"} className="card-actions justify-end">
              <button className="btn btn-ghost">
                <FaArrowCircleRight className="text-3xl" />
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg-stone-200 text-black">
          <div className="card-body">
            <h2 className="card-title">What is JWT</h2>
            <p>
              the algorithm specified in the header, and sign that. JWTs are
              often used in authentication and authorization protocols. When a
            </p>
            <Link to={"/postDetails"} className="card-actions justify-end">
              <button className="btn btn-ghost">
                <FaArrowCircleRight className="text-3xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
