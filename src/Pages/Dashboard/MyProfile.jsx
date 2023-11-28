import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const [profileData, setProfileData] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.get(`/singleUser/${user?.email}`).then((res) => {
      console.log(res.data);
      setProfileData(res.data);
    });
  }, [axiosSecure, user?.email]);

  return (
    <div className="text-center space-y-5">
      <Helmet>
        <title>Dev || Profile</title>
      </Helmet>
      <div className="flex items-center mx-auto justify-center">
        <div className="space-y-3">
          <img
            className="rounded-full h-[150px] mx-auto border-2 border-indigo-500"
            src={user?.photoURL}
            alt=""
          />
          <h2 className="ustify-center text-3xl font-bold text-emerald-950">
            {user?.displayName}
          </h2>
          <h4 className="font-semibold">{user?.email}</h4>
          <h4 className="font-semibold">Badges : {profileData?.badge}</h4>
          <div className="divider w-[500px] divider-neutral"></div>
        </div>
      </div>
      {/* cart.......... */}
      <div className="text-2xl font-semibold ">
        <div className="divider divider-warning">Recent Post</div>
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
