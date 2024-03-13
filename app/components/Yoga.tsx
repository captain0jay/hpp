import React from 'react'
import Image from "next/image"

export default function Yoga() {
  return (
        <>
            <div className="text-6xl text-white inline">Yoga excercises we offer</div>

            <div className="text-lg text-white mt-8">Welcome to Health Plus Physiotherapy and Yoga Center – where well-being meets personalized care. Our clinic combines physiotherapy and yoga services for a holistic approach to health. Our experienced team tailors solutions to your needs, promoting recovery and wellness. Discover the synergy of therapeutic techniques and mindful yoga practices for your overall health and vitality</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 w-full w-full sm:h-[550px] mt-8">
                <div className='col-span-1 bg-black inline-flex min-w-min min-h-min justify-center'>
                    <Image src="/yoga2.jpg" width={500} height={850} alt='Yoga pose image'/>
                </div>
                <div className='col-span-1 flex justify-center items-center'>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="p-4 gap-4 flex flex-col justify-center items-center w-full">
                            <div className="text-3xl">Surynamaskar</div>
                            <div className="text-3xl mt-5">Tadasana</div>  
                            <div className="text-3xl mt-5">Adho Mukha Svanasana </div> 
                            <div className="text-3xl mt-5">Virabhadrasana I </div> 
                            <div className="text-3xl mt-5">Virabhadrasana II </div> 
                            <div className="text-3xl mt-5">Vrksasana </div> 
                            <div className="text-3xl mt-5">Balasana </div> 
                            <div className="text-3xl mt-5">Bhujangasana </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 w-full sm:h-[550px] h-[1100px] flex mt-8 ">
                <div className='flex justify-center items-center order-2 sm:order-1'>
                    <div className="w-full h-full flex justify-center items-center">
                        
                        <div className="p-4 ml-12 mt-4 flex flex-col justify-center items-center gap-4">
                        <div className="text-3xl">Marjaryasana-Bitilasana </div> 
                        <div className="text-3xl mt-5">Setu Bandhasana </div> 
                        <div className="text-3xl mt-5">Paschimottanasana </div> 
                        <div className="text-3xl mt-5">Phalakasana </div> 
                        <div className="text-3xl mt-5">Navasana </div> 
                        <div className="text-3xl mt-5">Trikonasana </div> 
                        <div className="text-3xl mt-5">Urdhva Mukha Svanasana </div> 
                        </div>
                    </div>
                </div>
                <div className='col-span-1 bg-black inline-flex min-w-min min-h-min justify-center order-1 sm:order-2'>
                <Image src="/yoga4.jpg" width={900} height={300} alt='Yoga pose image'/>
                </div>
            </div> 
        </>
  )
}
