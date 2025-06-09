'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navbarData } from '../constants/Navbar'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Github, X as Twitter, Facebook } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between py-2 md:py-6 relative">
      {/* Left: Logo */}
      <div className="flex-shrink-0 cursor-pointer">
        <Image
          src={navbarData.logo.src}
          alt={navbarData.logo.alt}
          width={101}
          height={27}
        />
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex space-x-12 absolute left-1/2 -translate-x-1/2">
        {navbarData.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm sm:text-base font-light">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-gray-500" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-gray-500" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-gray-500" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden block cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black-background shadow-lg p-4 w-48 rounded-md md:hidden z-50">
          <ul className="flex flex-col gap-4">
            {navbarData.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
