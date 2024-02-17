import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from './ui/card'

export default function CorouselService() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Card className="h-[150px] hover:scale-95 transition-all duration-200 px-8 py-6 bg-gradient-to-r from-teal-950 to-red-900 text-white">
            <p className='text-gray-300 mb-1'>#Coding</p>
            <h2 className='text-lg shadow-2xl font-bold'>Website Development using MERN Stack</h2>
          </Card>
        </CarouselItem>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="h-[150px] relative">
              <CardContent className="p-0 flex items-center justify-center h-full">
                <span>Coming Soon</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
        <CarouselItem>
          <Card className="h-[150px] relative">
            <CardContent className="p-0 flex items-center justify-center h-full">
              <span>Coming Soon</span>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="static" />
      <CarouselNext className="static mt-8 ms-3" />
    </Carousel>
  )
}
