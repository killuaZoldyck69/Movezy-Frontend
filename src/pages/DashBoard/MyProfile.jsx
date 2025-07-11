import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Upload } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import useType from "@/hooks/useType";

const MyProfile = () => {
  const { user } = useAuth();
  const [userType] = useType();
  const [userData] = useState({
    name: "User name",
    email: "mi@xpaytech.co",
    phone: "+20-01274318900",
    address: "285 N Broad St, Elizabeth, NJ 07208, USA",
    userType: "User",
  });

  return (
    <div className="container mx-auto max-w-3xl p-10 my-20 shadow-2xl shadow-red-400 rounded-xl">
      <h1 className="text-3xl text-black text-center font-bold mb-6 flex justify-center gap-5">
        <FaUserAlt></FaUserAlt> My Profile
      </h1>

      <Card className="p-6 border-none shadow-none">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left section - Profile image */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-gray-50 aspect-square rounded-md relative flex items-center justify-center">
              <img src={user?.photoURL} alt="" />
              <button className="absolute top-3 left-3 bg-white rounded-full p-1.5 shadow-sm">
                <Upload size={16} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Right section - Profile information */}
          <div className="flex-1 space-y-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Name:</p>
                <p className="border-b border-gray-400 w-fit">
                  {user?.displayName}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Email:</p>
                <p className="border-b border-gray-400 w-fit">{user?.email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Phone Number:</p>
                <p className="border-b border-gray-400 w-fit">
                  {userData.phone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Address:</p>
                <p className="border-b border-gray-400 w-fit">
                  {userData.address}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">User Type:</p>
                <p className="border-b border-gray-400 w-fit">{userType}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                className="border-indigo-300 text-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 flex items-center gap-2"
              >
                <Pencil size={14} className="text-indigo-500" />
                EDIT PROFILE
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default MyProfile;
