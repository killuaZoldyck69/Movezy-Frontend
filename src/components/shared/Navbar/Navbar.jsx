import React from "react";
import { BellRingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <li>
              <Link to={"/auth/login"}>
                <Button className="bg-red-600">Login</Button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
