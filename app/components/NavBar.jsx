"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const navlink = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="fixed bg-[#121212] left-0 right-0 top-0 z-10 ">
      <div className="flex flex-wrap justify-between p-4 mx-auto items-center">
        <Link
          href={"/"}
          className="font-semibold text-white text-xl sm:text-2xl"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden ">
          {!menuIsOpen ? (
            <button onClick={() => setMenuIsOpen(true)}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setMenuIsOpen(false)}>
              <XmarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex md:flex-row md:p-0 md:space-x-9 mt-0">
            {navlink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        {menuIsOpen ? (
          <ul className="flex flex-col text-center py-4">
            {navlink.map((link, index) => (
              <li
                key={index}
                className="border-[0.5px] rounded-full py-1 my-1 border-white hover:bg-white hover:text-black"
              >
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
