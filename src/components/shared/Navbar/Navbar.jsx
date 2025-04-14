import React from "react";
import logo from "../../../assets/logo.png";
import { BellRingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="max-w-7xl py-2 mx-auto">
      <header>
        <div className="flex items-center justify-between">
          <img src={logo} className="w-20 h-20" alt="" />
          <ul className="flex items-center gap-3">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>
                <BellRingIcon />
              </a>
            </li>
            <li>
              <a>
                <Button>Login</Button>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
