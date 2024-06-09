"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Import useState hook

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 text-md dark:text-white">
      <div className=" mx-auto ml-[45px] flex justify-between items-center">
        {/* Logo or Brand */}
        <div>
          <Link href="/">
            <Image
              src="https://www.dewr.gov.au/themes/custom/duncan/logo-dewr.png"
              height={500}
              width={300}
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-4 w-full">
          <li className='list-none'>
            <Link href="https://consultations.dewr.gov.au/" className="text-gray-500 hover:text-sky-300">
              Consultations
            </Link>
          </li>
          <li className='list-none'>
            <Link href="https://www.dewr.gov.au/about-department/our-ministers" className="text-gray-500 hover:text-sky-300">
              Ministers
            </Link>
          </li>
          <li className='list-none'>
            <Link href="https://www.dewr.gov.au/programs-initiatives" className="text-gray-500 hover:text-sky-300">
              Programs and Initiatives
            </Link>
          </li>

          <Link href="/" className="flex text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#54a8cd] transition-all duration-300">Home</Link>
  <Link href="/about" className="flex line-clamp-3 text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#43785e] transition-all duration-300">About Us</Link>
  <Link href="/skills" className="flex text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#bfbd4e] transition-all duration-300">Skills and Training</Link>
  <Link href="/employment" className="flex text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#54a8cd] transition-all duration-300">Employment</Link>
  <Link href="/workplace" className="flex text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#d78250] transition-all duration-300">Workplace Relations</Link>

  <Link href="/more" className="flex text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#d78250] transition-all duration-300">More Features</Link>


        </nav>

        {/* Burger Menu Button */}
        <button
          className="md:hidden focus:outline-none ml-4"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-6 w-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="[link](https://www.dewr.gov.au/themes/custom/duncan/logo-dewr.png)"
          >
            {isMenuOpen ? (
              <path
                d="M6 19l9-12-9-12-2 2 9 12-9 12z"
                fill="currentColor"
              />
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto 
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="flex justify-end p-4">
          <button
            className="focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="[link](https://www.dewr.gov.au/themes/custom/duncan/logo-dewr.png)"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/consultaions" className="text-black hover:text-sky-300">
              Consultations
            </Link>
          </li>
          <li>
            <Link href="/ministers" className="text-black hover:text-sky-300">
              Ministers
            </Link>
          </li>
          <li>
            <Link href="/programs" className="text-black hover:text-sky-300">
              Programs and Initiatives
            </Link>
          </li>
          <Link href="/" className="text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#54a8cd] transition-all duration-300">Home</Link>
  <Link href="/about" className="text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#43785e] transition-all duration-300">About Us</Link>
  <Link href="/skills" className="text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#bfbd4e] transition-all duration-300">Skills and Training</Link>
  <Link href="/employment" className="text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#54a8cd] transition-all duration-300">Employment</Link>
  <Link href="/workplace" className="text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#d78250] transition-all duration-300">Workplace Relations</Link>

  <Link href="/more" className="text-black px-4 py-2 mx-2 hover:border-b-4 border-transparent hover:border-[#d78250] transition-all duration-300">More Features</Link>




        </ul>
      </nav>
    </header>
  );
};

export default Header;