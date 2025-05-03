import AuthLayout from "@/layouts/AuthLayout";
import DashBoardLayout from "@/layouts/DashBoardLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/AuthPage/Login";
import Signup from "@/pages/AuthPage/Signup";
import MyProfile from "@/pages/DashBoard/MyProfile";
import HomePage from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        index: true,
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
