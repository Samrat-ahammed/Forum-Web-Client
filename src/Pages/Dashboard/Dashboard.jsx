import { NavLink, Outlet } from "react-router-dom";
import { CgHome, CgProfile, CgUser } from "react-icons/cg";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsPostcard } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import useAdmin from "../../CustomHooks/useAdmin";
import { VscHome } from "react-icons/vsc";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-slate-400">
        {/* user dashboard...... */}

        {!isAdmin ? (
          <ul className="menu p-4 space-y-4">
            <li>
              <NavLink to={"/"}>
                <CgHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myProfile"}>
                <CgProfile />
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/addPost"}>
                <MdOutlineLibraryAdd />
                Add Post
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myPosts"}>
                <BsPostcard />
                My Posts
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="menu p-4 space-y-4">
            <li>
              <NavLink to={"/"}>
                <CgHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myProfile"}>
                <CgProfile />
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/manageUser"}>
                <CgUser />
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/announcement"}>
                <TfiAnnouncement />
                Announcement
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/state"}>
                <VscHome />
                Admin-Home
              </NavLink>
            </li>
          </ul>
        )}

        {/* admin dashboard....... */}
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
