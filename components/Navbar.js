import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <nav className='bg-white text-black min-w-full'>
        <div className='flex flex-row justify-between'>
        <div className="text-2xl font-semibold items-center">
            complain.io
        </div>
        <div className='flex flex-row gap-10 items-center'>
            <ul className='flex flex-row justify-between gap-5 mr-5 text-xl font-semibold'>
                <li><a>Home</a></li>
                <li><a>About us</a></li>
            </ul>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
