import ErrorPage from "@/components/shared/ErrorPage/ErrorPage";
import AuthLayout from "@/layouts/AuthLayout";
import DashBoardLayout from "@/layouts/DashBoardLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/AuthPage/Login";
import Signup from "@/pages/AuthPage/Signup";
import MyProfile from "@/pages/DashBoard/MyProfile";
import BookParcel from "@/pages/DashBoard/User/BookParcel";
import MyParcels from "@/pages/DashBoard/User/MyParcels";
import UpdateBooking from "@/pages/DashBoard/User/UpdateBooking";
import HomePage from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import AllParcels from "@/pages/DashBoard/Admin/AllParcels";
import AllUsers from "@/pages/DashBoard/Admin/AllUsers";
import Statistics from "@/pages/DashBoard/Admin/Statistics";
import AllDeliveryMen from "@/pages/DashBoard/Admin/AllDeliveryMen";
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
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
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
      {
        path: "my-parcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: "update-parcel/:id",
        element: <UpdateBooking></UpdateBooking>,
        loader: ({ params }) => fetch(`update-parcel/${params.id}`),
      },

      // admin routes
      {
        path: "statistics",
        element: (
          <AdminRoutes>
            <Statistics />
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "all-parcels",
        element: (
          <AdminRoutes>
            <AllParcels />
          </AdminRoutes>
        ),
      },
      {
        path: "all-delivery-men",
        element: (
          <AdminRoutes>
            <AllDeliveryMen />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
