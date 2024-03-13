import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
export default function Imgcsl() {
    const serviceItems = [
        {
          index: 1,
          image: "/a5.jpg"
        },
        {
            index: 2,
            image: "/a2.jpg"},
        {
            index: 3,
            image: "/a6.jpg"},
        {
            index: 4,
            image: "/a4.jpg"},
        {
            index: 5,
            image: "/a1.jpg"},
        {
            index: 6,
            image: "/a3.jpg"}
      ];
  return (
    <>
        <div className="">
            <div className="flex gap-3">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full custom-width"
                    plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                      ]}
                    >
                <CarouselContent>
                    {serviceItems.map((serviceItem: any) => (
                        <CarouselItem key={serviceItem.index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2 ">
                            <Card className="w-[300px] h-[200px] border border-slate-600 rounded-3xl">
                                <Image src={serviceItem.image} className="rounded-3xl justify-center" width={300} height={200} alt='Yoga pose image'/>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>
        </div>
    </>
  )
}
