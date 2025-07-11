/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Spinner = ({ className, ...props }) => {
  return (
    <Loader2 className={cn("h-4 w-4 animate-spin", className)} {...props} />
  );
};

export { Spinner };
