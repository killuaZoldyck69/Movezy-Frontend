import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Globe,
  Clock,
  Calendar,
  Banknote,
  Shield,
  Cpu,
  MapPinCheck,
  FastForward,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const ChooseUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold text-center mb-12">
        Choose{" "}
        <span className="font-bold">
          Move<span className="text-red-500">Zy </span>
        </span>
        as your logistics partner
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* First row */}
        <Card className="border-0 shadow-sm hover:shadow-2xl">
          <CardHeader className="flex items-center justify-center pb-2">
            <div className="relative">
              <Activity className="h-12 w-12" />
              <Cpu className=" absolute top-10 left-9 bg-red-500"></Cpu>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">
              Industry-leading tech
            </CardTitle>
            <CardDescription className="text-sm">
              With a brilliant team of engineers driving everything we do, REDX
              offers the best possible service experience powered by superior
              technology
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-2xl">
          <CardHeader className="flex items-center justify-center pb-2">
            <div className="relative">
              <Globe className="h-12 w-12" />
              <MapPinCheck className=" absolute top-10 left-9 bg-red-500"></MapPinCheck>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">Nationwide coverage</CardTitle>
            <CardDescription className="text-sm">
              REDX offers the widest logistics network, covering 64 districts
              and 490+ sub districts across Bangladesh
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-2xl">
          <CardHeader className="flex items-center justify-center pb-2">
            <div className="relative">
              <Clock className="h-12 w-12" />
              <FastForward className=" absolute top-10 left-9 bg-red-500" />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">Fastest solutions</CardTitle>
            <CardDescription className="text-sm">
              Backed by an agile team and dynamic operations, we promise to find
              the fastest solutions for your needs
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-0 shadow-sm hover:shadow-2xl">
          <CardHeader className="flex items-center justify-center pb-2">
            <div className="relative">
              <Calendar className="h-12 w-12" />
              <Receipt className=" absolute top-10 left-9 bg-red-500" />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">Next day payment</CardTitle>
            <CardDescription className="text-sm">
              Once the delivery is complete you will receive payment the very
              next day.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-2xl">
          <CardHeader className="flex items-center justify-center pb-2">
            <div className="relative">
              <Banknote className="h-12 w-12" />
              <Receipt className=" absolute top-10 left-9 bg-red-500" />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">Best COD rates</CardTitle>
            <CardDescription className="text-sm">
              COD charge inside Dhaka 0%, outside Dhaka 1%.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-2xl">
          <CardHeader className="flex items-center justify-center pb-2">
            <div className="relative">
              <Shield className="h-12 w-12" />
              <ShieldCheck className=" absolute top-10 left-9 bg-red-500" />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">Secure handling</CardTitle>
            <CardDescription className="text-sm">
              Compensation policy guarantees safety of your shipment
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChooseUs;
