"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button"
import Services from "./components/Services";
import Map from "./components/Map";
import Yoga from "./components/Yoga";
import Diet from "./components/Diet";
import Wcu from "./components/Wcu";
import Reviews from "./components/Reviews";
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import Imgcsl from "./components/Imgcsl";
import Twoimgcl from "./components/Twoimgcl";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function Home() {
  const words = `Healthplus Physiotherapy, Vadodara.`;
  return (
    <>
     <div className="">

      <div className="">
        <div className="flex flex-col p-8 h-[35rem] relative">
        <BackgroundBeams className="z-5"/>
          <div className="absolute sm:w-[50%] w-[75%] rounded-3xl h-full top-0 right-0 z-10 opacity-50 mt-24">
            <Twoimgcl/>
            <div className="mt-4">
            <Imgcsl/>
            </div>
          </div>
          <TextGenerateEffect words={words} className="mt-40 z-20" />
          <div className="mt-6 max-w-[400px] z-20">
            <div className="mt-2">
              <p className="text-gray-400">Health plus physiotherapy clinic, Vasna, Gotri, vadodara, Gujarat - 390876</p>
            </div>
            <div className="mt-1">
              <p>Phone number</p>
              <p className="text-gray-400">9316150799</p>
            </div>
            <div className=" mt-1">
              <p>Email Address</p>
              <p className="text-gray-400">mittal.physio@gmail.com</p>
            </div>
        </div>
        </div>
      </div>
      <div className=""></div>
     </div>
     <div className="w-full flex">
        <div className="rounded-3xl w-full bg-blue-500 grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-4 p-8">
          <div className="col-span-4">
            <div className="text-4xl sm:text-6xl text-white inline">Get best physiotherapic care in all of</div><div className="text-4xl sm:text-6xl  text-black inline"> Vadodara</div> 
            <div className="text-lg text-white mt-8">Welcome to Health Plus Physiotherapy and Yoga Center, nestled in the heart of Vasna, Gotri, Vadodara. Your journey to holistic well-being begins here. At our clinic, we blend expert physiotherapy care with the transformative power of yoga, offering a sanctuary for healing and rejuvenation.</div>
            <div className="mt-6 gap-4">
              <Button className="bg-white text-black rounded-3xl w-[150px] h-[50px] text-xl">Contact</Button>
              <Button variant="outline" className="ml-6  rounded-3xl w-[150px] h-[50px] text-xl">Address</Button>
            </div>
          </div>
          <div className="col-span-3 bg-blue-500 px-8 justify-center">
            <div className="flex rounded-2xl inline-flex min-w-min min-h-min ml-8 justify-center items-center h-full w-full mt-8 sm:mt-0">
               <Image src="/clinic1.png" className="rounded-2xl justify-center" width={480} height={320} alt='Yoga pose image'/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black p-8 ">
            <Services />
      </div>
      <div className="w-full bg-black p-8 items-center">
            <Yoga/>
      </div>
      <div className="w-full bg-black p-8 place-content-center">
            <Diet/>
      </div>
      <div className="w-full bg-black p-8 place-content-center">
            <Wcu/>
      </div>
      <div className="w-full bg-black p-8 place-content-center">
            <Reviews/>
      </div>
      <div className="w-full bg-black p-8">
          <div className="mt-10 w-full bg-black">
          <div className="min-h-[550px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
            <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full h-full absolute">
                <div className="col-span-1">
                  <div className="text-6xl text-white inline">Our location</div>
                  <div className="text-lg text-white mt-6 mr-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aut quas voluptate odit corrupti quod unde numquam sint nulla voluptas?</div>
                  <div className="mt-6 max-w-[400px]">
                     <div className="mt-8">
                        <p className="text-gray-400">Health plus physiotherapy clinic, Vasna, Gotri, vadodara, Gujarat - 390876</p>
                     </div>
                     <div className="mt-8">
                        <p>Phone number</p>
                        <p className="text-gray-400">9316150799</p>
                     </div>
                     <div className="mt-8">
                        <p>Email Address</p>
                        <p className="text-gray-400">mittal.physio@gmail.com</p>
                     </div>
                  </div>
                </div>
                <div className="col-span-1 h-full w-full bg-white sm:block md:block hidden"><Map/></div>
              </div>
          </div>
          </div>
      </div>
      <div className="col-span-1 h-full w-full bg-black sm:hidden md:hidden block p-6"><Map/></div>
      <div className=" w-full bg-blue-400 p-8 justify-center w-full">
        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 text-black order-1 sm:order-2 flex flex-col items-center justify-center w-full">
          <div className="text-2xl col-span-1 flex flex-col items-center justify-center">About</div>
          <div className="text-2xl col-span-1 flex flex-col items-center justify-center">Contact</div>
          <div className="text-2xl col-span-1 flex flex-col items-center justify-center">Services</div>
          <div className="text-2xl col-span-1 flex flex-col items-center justify-center">Location</div>
         </div>
      </div>
    </>
  );
}
