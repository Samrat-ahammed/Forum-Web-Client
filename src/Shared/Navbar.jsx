import { Link } from "react-router-dom";
import navLogo from ".././assets/4974492.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const axiosPublic = useAxiosSecure();

  const { data: announcement = [] } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      console.log(res.data);
      return res.data;
    },
  });

  const handleLogout = () => {
    logout()
      .then((res) => {
        Swal.fire({
          icon: "error",
          title: "Logout Successfully",
          text: "",
          footer: "",
        });
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  const navLink = (
    <>
      <Link to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to={"/allPost"}>
        <li>
          <a>All-Post</a>
        </li>
      </Link>

      <Link to={"/membership"}>
        <li>
          <a>Membership</a>
        </li>
      </Link>
      {announcement.length > 0 && (
        <Link to={"/announcementPage"}>
          <li>
            <a>
              <IoIosNotificationsOutline className="text-2xl" />+
              {announcement?.length}
            </a>
          </li>
        </Link>
      )}
      {/* <Link to={"/dashboard"}>
        <li>
          <a>Dashboard</a>
        </li>
      </Link>
      <Link to={"/login"}>
        <li>
          <a>Join Us</a>
        </li>
      </Link> */}
    </>
  );
  return (
    <div className="">
      <div className="navbar container bg-slate-100 fixed z-10 opacity-80">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link
            to={"/"}
            className="flex justify-center items-center text-center btn btn-ghost text-xl"
          >
            <img className=" w-[40px]" src={navLogo} alt="" />
            <h2 className="text-zinc-800">Dev-Forum</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full opacity-100 border-4 border-black">
                  <img alt="Pic" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <a className="font-bold ml-3">{user?.displayName}</a>

                <Link to={"/dashboard/myProfile"}>
                  <li>
                    <a>Dashboard</a>
                  </li>
                </Link>
                {user?.email && (
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                )}
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <ul>
                <li className="font-semibold">
                  <a>Join Us</a>
                </li>
              </ul>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
