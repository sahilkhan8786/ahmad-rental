import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.jpeg'
import { Input } from "@/components/ui/input"
import { ShoppingCart } from 'lucide-react';
const Header = () => {
    return (
        <header className='bg-slate-200 w-full '>
            <nav className='flex items-center justify-between px-2 max-w-screen-2xl mx-auto p-2'>
                <div className="h-full w-28">
                    <Image src={logo} alt='logo' className='object-contain cursor-pointer' />
                </div>
                <div className='w-96'>
                    <Input className=' bg-white focus:border-b-yellow-500 border-b-2 border-transparent' type="text" placeholder="Search..." />
                </div>
                <div className='flex gap-6 text-xl items-center'>
                    <span className='cursor-pointer hover:underline'>Sign In</span>
                    <ShoppingCart className='cursor-pointer bg-yellow-500 size-10 rounded-full p-2 hover:bg-yellow-600' />
                </div>

            </nav>
        </header>
    )
}

export default Header