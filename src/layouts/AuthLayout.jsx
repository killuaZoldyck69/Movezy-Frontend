import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="border-b border-2"></div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
