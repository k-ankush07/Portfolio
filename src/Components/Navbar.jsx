import React, { useState } from 'react'
import logo from "../assets/Images/Vector (3).svg"
import logo2 from "../assets/Images/Vector (4).svg"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
   <section className='bg-[#000000] sticky top-0 z-50 '>
    <div className='container'>
 <header className='bg-black '>
     <nav className='flex items-center justify-between md:justify-between  py-3'>

  {/*  Desktop Layout */}
  <div className='hidden md:flex items-center justify-between w-full'>
    
    {/* Logo */}
   <Link to="/"> <img src={logo} alt='logo' /></Link>

    {/* Links */}
    <div className='flex gap-7 items-center bg-[#191919] py-[4px] rounded-full px-3'>
      <div className='bg-[#4a4a4a] rounded-full px-5 py-1'>
        <Link to="/" className='text-white'>Home</Link>
      </div>
      <Link to="/about" className='text-[#BDBDBD] hover:text-gray-100'>About</Link>
      <Link to="/work" className='text-[#BDBDBD] hover:text-gray-100 '>Work</Link>

      <select className='bg-transparent text-[#BDBDBD] outline-none hover:text-gray-100 cursor-pointer'>
        <option>More</option>
      </select>
    </div>

    {/* Right Icon */}
    <Link to=""><img src={logo2} alt='icon' /></Link>
  </div>

  {/* ✅ Mobile Layout (centered pill) */}
  <div className='md:hidden w-full flex justify-center'>
    <div className='flex items-center justify-between gap-10 bg-[#191919] px-3  py-2 rounded-[22px] max-w-[200px]'>
      
      {/* Logo */}
      <img src={logo} alt='logo' className='h-5' />

      {/* Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <img src={logo2} alt='menu' className='h-5' />
      </button>

    </div>
  </div>

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