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
  
export default function Reviews() {
    const serviceItems = [
        {
          index: 1,
          title: "Elon musk",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quibusdam ad suscipit at explicabo"
        },
        {
            index: 2,
            title: "Bill gates",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum commodi tempore consequatur sint minus"
        },
        {
            index: 3,
            title: "Mukesh Ambani",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum commodi tempore consequatur sint minus"
        },
        {
            index: 4,
            title: "Ratan tata",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum commodi tempore consequatur sint minus"
        },
        {
            index: 5,
            title: "Albert Einstein",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum commodi tempore consequatur sint minus"
        }
      ];
  return (
    <>
    <div className="text-6xl text-white inline">Reviews</div>
        <div className="text-lg text-white mt-8">Hear it from our patients themselves!</div>
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
                            <Card className="w-[300px] h-[200px] border border-slate-600 rounded-3xl">
                                <CardHeader className='mt-4'>
                                    <CardTitle>5* {serviceItem.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{serviceItem.description}</CardDescription>
                                </CardContent>
                            </Card>
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
