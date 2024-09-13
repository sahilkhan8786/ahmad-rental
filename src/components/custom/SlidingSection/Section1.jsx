import Image from 'next/image'
import React from 'react'
import image from '@/assets/hero.jpg'
import { DatePicker } from '@/components/ui/DatePicker'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@radix-ui/react-label'
const Section1 = () => {
    return (
        <div className='mx-auto max-w-screen-lg '>
            <div className='relative w-full h-full'>
                <div className='w-full h-full absolute bg-black/80'></div>
                <Image src={image} alt='hero Image' className='w-full object-cover' />
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white flex-col gap-6'>
                    <h1 className='font-serif uppercase text-3xl'>Find the right equipment for your project</h1>
                    <article className='flex flex-col gap-8'>
                        <aside className='flex gap-8'>

                            <div>
                                <p>Start Date</p>
                                <DatePicker />
                            </div>
                            <div>
                                <p>End Date</p>
                                <DatePicker />
                            </div>
                        </aside>
                        <RadioGroup defaultValue="Pick Up" className='flex justify-between w-full gap-8'>
                            <div className="flex items-center space-x-2 border-2 w-full p-2 cursor-pointer hover:bg-white/30">
                                <RadioGroupItem value="Pick Up" id="r1" />
                                <Label htmlFor="r1" className='w-full cursor-pointer'>Pick Up</Label>
                            </div>
                            <div className="flex items-center space-x-2 border-2 w-full p-2 cursor-pointer hover:bg-white/30">
                                <RadioGroupItem value="Delivery" id="r2" />
                                <Label htmlFor="r2" className='w-full cursor-pointer'>Delivery</Label>
                            </div>

                        </RadioGroup>
                        <Button className='w-full border-2 border-white text-white  cursor-pointer hover:bg-white hover:text-black text-xl'>Start Renting</Button>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Section1