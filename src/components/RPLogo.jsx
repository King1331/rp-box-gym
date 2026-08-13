import React from "react";
import { cn } from "@/lib/utils";

export default function RPLogo({ className, size = "md" }) {
  const heights = { sm: "h-9", md: "h-11", lg: "h-16" };
  return (
    <img
      src="https://media.base44.com/images/public/6a7a4d6773d71abcfb8eebd1/f182729a4_image.png"
      alt="RP Box"
      className={cn(heights[size], "w-auto object-contain", className)}
    />
  );
}