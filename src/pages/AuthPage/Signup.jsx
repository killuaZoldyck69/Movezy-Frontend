import React from "react";
import signupImg from "../../assets/signup.jpg";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[calc(100vh-76px)] md:h-auto lg:h-[calc(100vh-76px)] bg-black flex items-center justify-center p-4">
      <Card className="w-11/12  lg:w-4/6">
        <div className="grid md:grid-cols-2 items-center gap-0">
          {/* Image Side */}
          <div className="hidden md:block h-full p-4 sm:p-6">
            <img
              src={signupImg || "/placeholder.svg"}
              alt="Register"
              className="h-full w-full object-cover rounded-r-lg"
              style={{ maxHeight: "600px" }}
            />
          </div>

          {/* Form Side */}
          <div className="">
            <CardHeader className="">
              <CardTitle className="text-xl sm:text-2xl font-bold text-center md:text-left">
                Create an Account
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name field */}
                <div className="relative">
                  <Input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Full Name"
                    className="w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Photo URL field */}
                <div className="relative">
                  <Input
                    type="url"
                    {...register("photoUrl", {
                      required: "Photo URL is required",
                    })}
                    placeholder="Photo URL"
                    className="w-full"
                  />
                  {errors.photoUrl && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.photoUrl.message}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="relative">
                  <MdEmail className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Email"
                    className="pl-10"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number field */}
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{11}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    placeholder="Phone Number (11 digits)"
                    className="pl-10"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Password field */}
                <div className="relative">
                  <RiLockPasswordLine className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^[A-Za-z0-9]\w{6,14}$/,
                        message:
                          " Add at least one uppercase letter, one lowercase letter, one number",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    placeholder="Password"
                    className="pl-10"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* User Type Selection */}
                <div className="relative">
                  <select
                    {...register("userType")}
                    className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2"
                    // onChange={(e) => setUserType(e.target.value)}
                    // value={userType}
                  >
                    <option value="user">User</option>
                    <option value="deliveryMan">Delivery Man</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full  bg-red-600 hover:bg-red-700"
                >
                  Sign up
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  //   variant="outline"
                  className="w-full"
                  //   onClick={handleLoginWithGoogle}
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Sign up with Google
                </Button>

                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-red-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
