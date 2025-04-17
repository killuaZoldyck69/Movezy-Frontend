import React from "react";
import { BellRingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <a>Home</a>
            </li>
            <li>
              <a>
                <BellRingIcon />
              </a>
            </li>
            <li>
              <a>
                <Button className="bg-red-600">Login</Button>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
