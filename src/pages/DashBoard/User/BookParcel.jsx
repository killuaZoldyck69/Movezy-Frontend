"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarIcon,
  MapPinIcon,
  PackageIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "react-toastify";

export default function BookParcel() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, setUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const notify = () => toast.success("Parcel Booked successfully");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      parcelType: "",
      parcelWeight: "",
      receiverName: "",
      receiverPhone: "",
      deliveryAddress: "",
      requestedDeliveryDate: "",
      latitude: "",
      longitude: "",
    },
  });

  const parcelWeight = watch("parcelWeight");

  const calculatePrice = (weight) => {
    if (!weight || weight <= 0) return 0;
    if (weight <= 1) return 50;
    if (weight <= 2) return 100;
    return 150;
  };

  const onSubmit = async (data) => {
    const price = calculatePrice(Number(data.parcelWeight));
    const bookingData = {
      ...data,
      price,
      status: "pending",
      bookingDate: new Date().toISOString(),
    };

    setIsSubmitting(true);

    try {
      const response = await axiosSecure.post("/bookings", bookingData);
      if (response.data.insertedId) {
        console.log("Booking successful");
        notify();

        // Prepare user update payload
        const updatedUserData = {
          phoneNumber: user.phoneNumber || data.phoneNumber, // Add phone number if missing
          price, // Send only the price of the current booking
        };

        try {
          const userUpdateResponse = await axiosSecure.patch(
            `users/${user?.email}`,
            updatedUserData
          );
          if (userUpdateResponse.data.success) {
            console.log("User data updated successfully");
            setUser((prevUser) => ({
              ...prevUser,
              totalSpent: (prevUser?.totalSpent || 0) + price, // Update locally
              bookingCount: (prevUser?.bookingCount || 0) + 1,
            }));
          } else {
            console.error(
              "User update failed:",
              userUpdateResponse.data.message
            );
          }
        } catch (error) {
          console.error(
            "Error updating user:",
            error.response?.data || error.message
          );
        }

        // Reset form after successful booking
        reset();
      }
    } catch (error) {
      console.error("Error booking parcel:", error);
      toast.error("Failed to book parcel. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentPrice = calculatePrice(Number(parcelWeight));

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-red-100 rounded-full">
                <PackageIcon className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Book a Parcel
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Fill in the details below to book your parcel delivery
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Sender Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <UserIcon className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sender Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      readOnly
                      className="bg-gray-50 cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      readOnly
                      className="bg-gray-50 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter your phone number"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                      className={errors.phoneNumber ? "border-red-500" : ""}
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-600">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parcelType">Parcel Type</Label>
                    <Input
                      id="parcelType"
                      placeholder="e.g., Documents, Electronics, Clothing"
                      {...register("parcelType", {
                        required: "Parcel type is required",
                      })}
                      className={errors.parcelType ? "border-red-500" : ""}
                    />
                    {errors.parcelType && (
                      <p className="text-sm text-red-600">
                        {errors.parcelType.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Parcel Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <PackageIcon className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Parcel Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parcelWeight">Parcel Weight (kg)</Label>
                    <Input
                      id="parcelWeight"
                      type="number"
                      step="0.1"
                      min="0.1"
                      placeholder="0.0"
                      {...register("parcelWeight", {
                        required: "Weight is required",
                        min: {
                          value: 0.1,
                          message: "Weight must be at least 0.1 kg",
                        },
                      })}
                      className={errors.parcelWeight ? "border-red-500" : ""}
                    />
                    {errors.parcelWeight && (
                      <p className="text-sm text-red-600">
                        {errors.parcelWeight.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (Tk)</Label>
                    <div className="relative">
                      <Input
                        id="price"
                        value={currentPrice}
                        readOnly
                        className="bg-gray-50 cursor-not-allowed font-semibold text-green-600"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <span className="text-sm text-gray-500">BDT</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Pricing: ≤1kg: 50Tk, ≤2kg: 100Tk, {">"}2kg: 150Tk
                    </p>
                  </div>
                </div>
              </div>

              {/* Receiver Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <PhoneIcon className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Receiver Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="receiverName">Receiver's Name</Label>
                    <Input
                      id="receiverName"
                      placeholder="Enter receiver's full name"
                      {...register("receiverName", {
                        required: "Receiver's name is required",
                      })}
                      className={errors.receiverName ? "border-red-500" : ""}
                    />
                    {errors.receiverName && (
                      <p className="text-sm text-red-600">
                        {errors.receiverName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="receiverPhone">Receiver's Phone</Label>
                    <Input
                      id="receiverPhone"
                      type="tel"
                      placeholder="Enter receiver's phone number"
                      {...register("receiverPhone", {
                        required: "Receiver's phone is required",
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                      className={errors.receiverPhone ? "border-red-500" : ""}
                    />
                    {errors.receiverPhone && (
                      <p className="text-sm text-red-600">
                        {errors.receiverPhone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPinIcon className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delivery Information
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="deliveryAddress">Delivery Address</Label>
                    <Textarea
                      id="deliveryAddress"
                      placeholder="Enter complete delivery address with landmarks"
                      rows={3}
                      {...register("deliveryAddress", {
                        required: "Delivery address is required",
                      })}
                      className={errors.deliveryAddress ? "border-red-500" : ""}
                    />
                    {errors.deliveryAddress && (
                      <p className="text-sm text-red-600">
                        {errors.deliveryAddress.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="latitude">Latitude</Label>
                      <Input
                        id="latitude"
                        type="number"
                        step="any"
                        placeholder="e.g., 23.8103"
                        {...register("latitude", {
                          required: "Latitude is required",
                          pattern: {
                            value: /^-?([0-8]?[0-9]|90)(\.[0-9]+)?$/,
                            message:
                              "Please enter a valid latitude (-90 to 90)",
                          },
                        })}
                        className={errors.latitude ? "border-red-500" : ""}
                      />
                      {errors.latitude && (
                        <p className="text-sm text-red-600">
                          {errors.latitude.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="longitude">Longitude</Label>
                      <Input
                        id="longitude"
                        type="number"
                        step="any"
                        placeholder="e.g., 90.4125"
                        {...register("longitude", {
                          required: "Longitude is required",
                          pattern: {
                            value:
                              /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]+)?$/,
                            message:
                              "Please enter a valid longitude (-180 to 180)",
                          },
                        })}
                        className={errors.longitude ? "border-red-500" : ""}
                      />
                      {errors.longitude && (
                        <p className="text-sm text-red-600">
                          {errors.longitude.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestedDeliveryDate">
                        Requested Delivery Date
                      </Label>
                      <div className="relative">
                        <Input
                          id="requestedDeliveryDate"
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          {...register("requestedDeliveryDate", {
                            required: "Delivery date is required",
                          })}
                          className={
                            errors.requestedDeliveryDate ? "border-red-500" : ""
                          }
                        />
                        <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.requestedDeliveryDate && (
                        <p className="text-sm text-red-600">
                          {errors.requestedDeliveryDate.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold transition-colors duration-200"
                >
                  {isSubmitting ? "Booking Parcel..." : "Book Parcel"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
