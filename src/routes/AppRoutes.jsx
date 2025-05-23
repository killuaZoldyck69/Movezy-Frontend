import ErrorPage from "@/components/shared/ErrorPage/ErrorPage";
import AuthLayout from "@/layouts/AuthLayout";
import DashBoardLayout from "@/layouts/DashBoardLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/AuthPage/Login";
import Signup from "@/pages/AuthPage/Signup";
import MyProfile from "@/pages/DashBoard/MyProfile";
import BookParcel from "@/pages/DashBoard/User/BookParcel";
import HomePage from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "book-parcel",
        element: <BookParcel></BookParcel>,
      },
    ],
  },
]);
