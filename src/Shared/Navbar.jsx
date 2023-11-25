import { Link } from "react-router-dom";
import navLogo from ".././assets/4974492.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

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
      <Link to={"/dashboard/myPosts"}>
        <li>
          <a>My-Post</a>
        </li>
      </Link>
      <Link to={"/announcementPage"}>
        <li>
          <a>
            Announcement
            <IoIosNotificationsOutline />
          </a>
        </li>
      </Link>
      <Link to={"/dashboard"}>
        <li>
          <a>Dashboard</a>
        </li>
      </Link>
      <Link to={"/login"}>
        <li>
          <a>Join Us</a>
        </li>
      </Link>
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
          <div className="form-control mx-3 text-black">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-success w-24 md:w-auto bg-teal-100"
            />
          </div>
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

                <Link to={"/dashboard"}>
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
