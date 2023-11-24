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
        path: "postDetails",
        element: <PostDetails></PostDetails>,
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
    ],
  },
]);
