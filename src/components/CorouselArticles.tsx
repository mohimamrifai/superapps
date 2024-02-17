import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from './ui/card'

export default function CorouselArticles() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="basis-4/5">
          <Card className="h-[130px] relative overflow-hidden hover:scale-95 transition-all duration-200">
            <div className="absolute -right-5 top-2 bg-yellow-300 shadow-xl px-6 rotate-45">New</div>
            <CardContent className="p-0 flex items-center justify-center h-full">
              <span>Coming Soon New</span>
            </CardContent>
          </Card>
          <h3 className="mt-2 mb-1 text-base line-clamp-2 leading-5 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!</h3>
          <span className="text-xs text-gray-700 font-light">Jan 05, 2024</span>
        </CarouselItem>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="basis-4/5" key={index}>
            <Card className="h-[130px] hover:scale-95 transition-all duration-200">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span>Coming Soon</span>
              </CardContent>
            </Card>
            <h3 className="mt-2 mb-1 text-base line-clamp-2 leading-5 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!</h3>
          <span className="text-xs text-gray-700 font-light">Jan 05, 2024</span>
          </CarouselItem>
        ))}
        <CarouselItem className="basis-4/5">
          <Card className="h-[130px] hover:scale-95 transition-all duration-200">
            <CardContent className="p-0 flex items-center justify-center h-full">
              <span>Coming Soon ++</span>
            </CardContent>
          </Card>
          <h3 className="mt-2 mb-1 text-base line-clamp-2 leading-5 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit!</h3>
          <span className="text-xs text-gray-700 font-light">Jan 05, 2024</span>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="static" />
      <CarouselNext className="static mt-8 ms-3" />
    </Carousel>
  )
}
