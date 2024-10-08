// import React from 'react'
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"

// const Navbar = () => {
//   return (
//     <nav className='bg-white text-black min-w-full'>
//         <div className='flex flex-row justify-between'>
//         <div className="text-2xl font-semibold items-center">
//             complain.io
//         </div>
//         <div className='flex flex-row gap-10 items-center'>
//             <ul className='flex flex-row justify-between gap-5 mr-5 text-xl font-semibold'>
//                 <li><a href="https://www.india.gov.in/my-government">Home</a></li>
//                 <li><a>About us</a></li>
//             </ul>
//     <Avatar>
//       <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//       <AvatarFallback>CN</AvatarFallback>
//     </Avatar>
//         </div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar

"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Show Complaints', href: '/file-complaint' },
    // { name: 'Track Complaint', href: '/track-complaint' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-8" src="https://as2.ftcdn.net/v2/jpg/02/29/51/37/1000_F_229513787_8XjaId5E9g3DYxHNialX7xUr0pppLXLJ.jpg" alt="Government Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === item.href
                        ? 'bg-primary-foreground text-primary'
                        : 'hover:bg-primary-foreground/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  Language <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
                <DropdownMenuItem>Gujrati</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-primary-foreground text-primary'
                    : 'hover:bg-primary-foreground/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-primary-foreground/10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-full justify-between">
                  Language <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  )
}