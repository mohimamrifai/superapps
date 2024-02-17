import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function CorouselCareer() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Card className="h-[140px] hover:scale-95 transition-all duration-200 px-5 py-3 bg-gradient-to-r from-gray-900 to-green-900 text-white">
            <h2 className="text-lg font-semibold text-gray-100">Frontend Developer</h2>
            <ul>
                <li className="list-disc ms-4">
                    <h2 className="text-sm text-gray-300 tracking-wide">Kerjanyaremote.com</h2>
                </li>
                <li className="list-disc ms-4 -mt-1">
                    <h2 className="text-sm tracking-wide text-gray-300">Remote</h2>
                </li>
            </ul>
            <p className="text-xs mt-2 text-gray-300">Juni 2023 - Juli 2023</p>
            <p className="text-xs text-gray-300">~ 1 Month</p>
          </Card>
        </CarouselItem>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="h-[140px] relative">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span>Coming Soon</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
        <CarouselItem>
          <Card className="h-[140px] relative">
            <CardContent className="p-0 flex items-center justify-center h-full">
              <span>Coming Soon</span>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="static" />
      <CarouselNext className="static mt-8 ms-3" />
    </Carousel>
  );
}
