import React from 'react';
import Image from 'next/image';
import {
  BiSearchAlt2 as SearchIcon,
  BiUserCircle as UserCircleIcon,
} from 'react-icons/bi';
import { FiMenu as MenuIcon } from 'react-icons/fi';
import {
  FaUserAlt as UsersIcon,
  FaGlobeAmericas as GlobeAltIcon,
} from 'react-icons/fa';

function Header() {
  return (
    // py-5 px-5 == p-5
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Middle - Search Section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          size={30}
          className="h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center md:space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon size={30} className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon size={30} className="h-6 w-6 cursor-pointer" />
          <UserCircleIcon size={30} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
