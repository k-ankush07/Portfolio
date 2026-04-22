import React, { useState } from 'react'
import logo from "../assets/Images/navlogo.png"
import logo2 from "../assets/Images/logo2.png"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
   <section className='bg-[#000000] sticky top-0 z-50 '>
    <div className='container'>
 <header className='bg-black '>
      <nav className='flex items-center justify-between gap-4 sm:gap-0  px-4 py-3 '>
        
        {/* Logo */}
        <img src={logo} alt='logo'  />

        {/* Desktop Links */}
        <div className='hidden md:flex gap-7 items-center  border[1px] border-gray-900  bg-[#191919] py-[4px] rounded-full px-3'>
          <div className='bg-[#4a4a4a] rounded-full px-5 py-1'>
            <Link to="/" className='text-[#FFFFFF]'>Home</Link>
          </div>
          <Link to="/about" className='text-[#BDBDBD]'>About</Link>
          <Link to="/work" className='text-[#BDBDBD]'>Work</Link>

          <select className='bg-transparent text-[#BDBDBD] outline-none'>
            <option>More</option>
            <option>One</option>
            <option>Two</option>
          </select>
        </div>

        {/* Right Icon */}
        <img src={logo2} alt='logo icon' className='hidden md:block' />

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={logo2} alt='logo2' />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-4 bg-[#191919] py-4'>
          <Link to="/" className='text-[#b2b2b2]'>Home</Link>
          <Link to="/about" className='text-[#898989]'>About</Link>
          <Link to="/work" className='text-[#898989]'>Work</Link>

          <select className='bg-transparent text-[#898989] outline-none'>
            <option>More</option>
            <option>One</option>
            <option>Two</option>
          </select>
        </div>
      )}
    </header>
    </div>
   </section>
  )
}

export default Navbar