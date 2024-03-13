import React from 'react'
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

export default function Services() {
    const serviceItems = [
        {
          index: 1,
          title: "Cupping",
          image: "/serv1.jpeg"
        },
        {
            index: 2,
            title: "Dry needling",
            image: "/serv2.jpg"
        },
        {
            index: 3,
            title: "Taping",
            image: "/serv3.jpg"
        },
        {
            index: 4,
            title: "Ultrasound cavitation",
            image: "/serv4.jpg"
        },
        {
            index: 5,
            title: "Spinal mobilization",
            image: "/serv5.jpg"
        }
      ];
  return (
    <>
    <div className="text-6xl text-white inline">Services we offer</div>
        <div className="text-lg text-white mt-8">Explore the diverse services at Health Plus Physiotherapy and Yoga Center, where personalized care meets holistic well-being. Our experienced team offers tailored physiotherapy and yoga solutions, promoting recovery and overall health. Discover the synergy of therapeutic techniques and mindful practices for your wellness journey.</div>
        <div className="">
            <div className="ml-6 mt-8 flex gap-3">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full custom-width"
                    >
                <CarouselContent>
                    {serviceItems.map((serviceItem: any) => (
                        <CarouselItem key={serviceItem.index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4">
                            <div className="flex items-center justify-center w-full">
                            <Card className="w-[300px] h-[300px] border border-slate-600 rounded-3xl p-2">
                            <Image src={serviceItem.image} className="rounded-2xl justify-center" width={300} height={200} alt='Yoga pose image'/>
                                <CardHeader className=''>
                                    <CardTitle>{serviceItem.title}</CardTitle>
                                </CardHeader>
                                
                            </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </div>
        </div>
    </>
  )
}
