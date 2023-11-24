import { Link } from "react-router-dom";
import navLogo from ".././assets/4974492.png";
const Navbar = () => {
  const navLink = (
    <>
      <Link to={"/"}>
        <li>
          <a>Home</a>
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
    <div>
      <div className="navbar container bg-slate-200 fixed z-10 opacity-60">
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
          <button className="flex justify-center items-center text-center btn btn-ghost text-xl">
            <img className=" w-[40px]" src={navLogo} alt="" />
            <h2 className="text-zinc-800">Dev-Forum</h2>
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full opacity-100 border-4 border-black">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/vmTky5j/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <a className="justify-between">User name</a>

              <Link to={"/dashboard"}>
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
