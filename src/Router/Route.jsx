import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PostDetails from "../Pages/Home/PostDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AddPost from "../Pages/Dashboard/AddPost";
import MyPosts from "../Pages/Dashboard/MyPosts";
import ManageUser from "../Pages/Dashboard/ManageUser";
import MakeAnnouncement from "../Pages/Dashboard/MakeAnnouncement";
import AnnouncementPage from "../Pages/Announcement/AnnouncementPage";
import AllPost from "../Pages/AllPost/AllPost";
import MembershipPage from "../Pages/Users/MembershipPage";
import CheckOutPayment from "../Pages/Users/CheckOutPayment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "postDetails/:id",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "allPost",
        element: <AllPost></AllPost>,
      },
      {
        path: "membership",
        element: <MembershipPage></MembershipPage>,
      },

      {
        path: "announcementPage",
        element: <AnnouncementPage></AnnouncementPage>,
      },
      {
        path: "checkOut",
        element: <CheckOutPayment></CheckOutPayment>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "myProfile", element: <MyProfile></MyProfile> },
      { path: "addPost", element: <AddPost></AddPost> },
      { path: "myPosts", element: <MyPosts></MyPosts> },
      { path: "manageUser", element: <ManageUser></ManageUser> },
      { path: "announcement", element: <MakeAnnouncement></MakeAnnouncement> },
    ],
  },
]);
