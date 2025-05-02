import React, { useContext, useState } from "react";
import { BellRingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuthContext from "@/providers/AuthContext";
import { MdSpaceDashboard } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaSignOutAlt } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const notify = () =>
    toast.error("Logout successful", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const handleLogout = () => {
    logoutUser().then(() => {
      console.log("Logout successfully");
      notify();
    });
  };

  return (
    <div className="w-11/12 md:w-2xl lg:w-7xl py-5 mx-auto">
      <header>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            Move<span className="text-red-600">Zy</span>
          </h3>
          <ul className="flex items-center gap-3">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>
                <BellRingIcon />
              </a>
            </li>
            {/* Login Button / Profile Picture */}
            {!user ? (
              <Link to="/auth/login">
                <Button className="bg-red-500 hover:bg-red-600 ">Login</Button>
              </Link>
            ) : (
              <DropdownMenu
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <DropdownMenuTrigger asChild>
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-10 h-10 object-cover rounded-full cursor-pointer"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 mt-8 bg-white rounded-lg shadow-lg p-2 z-10">
                  <div className="flex items-center gap-4">
                    <img
                      src={user?.photoURL}
                      alt="Profile"
                      className="w-10 h-10 object-cover rounded-full cursor-pointer"
                    />
                    <div className="space-y-1">
                      <div className="text-base font-semibold text-black">
                        {user?.displayName}
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                  <hr className="border border-gray-400 my-2" />
                  <div className="space-y-1 mt-2">
                    <Link to="/dashboard">
                      <DropdownMenuItem className="text-base flex items-center gap-2 hover:bg-red-400 rounded-md hover:px-5 cursor-pointer">
                        <MdSpaceDashboard />
                        Dashboard
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-base flex items-center gap-2 text-gray-700 hover:bg-[#FFEB00] rounded-md hover:px-5  cursor-pointer"
                    >
                      <FaSignOutAlt></FaSignOutAlt> Logout
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
