import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { PiMedalDuotone } from "react-icons/pi";

const NavItem = ({ href, ariaLabel, children, icon: Icon, iconClassName }) => (
  <div className="group relative xs:px-4 px-1 cursor-pointer">
    <a 
      href={href} 
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500"
      // Add logic here to determine if the link is active, e.g., based on scroll position or route
      // For example: isActive ? 'text-blue-500' : 'text-gray-700' 
    >
      <Icon className={iconClassName} />
    </a>
    <span 
      className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
    >
      {children}
    </span>
  </div>
);

const Nav = () => {
  return (
    <nav className='z-40 w-full h-fit flex fixed bottom-0 justify-center mb-2' aria-label="Main navigation">
      <div className="flex flex-col">
        <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md bg-[#fefeffb8] px-2">
          <NavItem href="#hero" ariaLabel="Go to Home section" icon={IoHomeOutline} iconClassName="text-[22px]">
            Home
          </NavItem>
          <NavItem href="#about" ariaLabel="Go to About section" icon={FaRegUser} iconClassName="text-[20px]">
            About
          </NavItem>
          <NavItem href="#skills" ariaLabel="Go to Skills section" icon={PiMedalDuotone} iconClassName="text-[23px]">
            Skills
          </NavItem>
          <NavItem href="#project" ariaLabel="Go to Projects section" icon={FaPencil} iconClassName="text-[19px]">
            Projects
          </NavItem>
          <NavItem href="#contact" ariaLabel="Go to Contact section" icon={IoChatboxOutline} iconClassName="text-[22px] mt-1">
            Contacts
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
