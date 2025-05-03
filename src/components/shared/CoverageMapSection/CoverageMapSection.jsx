import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import bdMap from "../../../assets/bangladash-map.svg";

const CoverageMapSection = () => {
  return (
    <div className="w-full bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Map area with location pins */}
        <div className="w-full md:w-1/2 relative">
          <img src={bdMap} alt="" />
        </div>

        {/* Text content area */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold ">
            <span className="font-bold">
              Move<span className="text-red-500">Zy </span>
            </span>{" "}
            provides logistics support in all 64 districts and 493 sub districts
            across Bangladesh
          </h2>

          <p className="text-lg text-gray-300">
            Whatever your logistics need, we guarantee the fastest service all
            over the country
          </p>

          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md h-auto">
            Check our coverage area
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverageMapSection;
