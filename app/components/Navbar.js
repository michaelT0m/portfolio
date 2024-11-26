"use client";
import { useEffect, useState } from "react";
import { navItems } from "../constant/data";
import Link from "next/link";
import { logo } from "../assets/asset";
import Image from "next/image";
import Button from "./ui/Button";
import { LuSquare, LuX } from "react-icons/lu";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menu, setMenu] = useState(false);
  // const [, setIsVisible] = useState(true);

  useEffect(() => {
    function toggleNav() {
      const currentValue = window.scrollY;
      if (currentValue > lastScroll && currentValue > 100) {
        setIsVisible(false)
      } else if (currentValue < lastScroll) {
        setIsVisible(true)
      }
      setLastScroll(currentValue )
    }
    window.addEventListener('scroll', toggleNav)

    return () => removeEventListener("scroll", toggleNav);
  }, [lastScroll]);
  return (
    <header
      className={`fixed w-full backdrop-blur-md dark:bg-black/50 z-50 py-2 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0 " : "-translate-y-full "
      }`}
    >
      <nav className="mx-auto w-[90%] md:w-4/5 flex h-16 justify-between items-center">
        <div className={`${menu && "hidden"}`}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-12 md:w-16" />
          </Link>
        </div>
        <div
          className={`flex items-center justify-between ${menu && "w-full"}`}
        >
          <ul className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <li key={item.id} className="text-xl ">
                <Link href={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>

          <ul className={`${!menu ? "hidden" : "flex gap-4"}`}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-xl"
                onClick={() => setMenu(!menu)}
              >
                <Link href={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>

          <button
            className={`dark:bg-[#15161c] bg-white rounded-lg select-none p-3 md:hidden`}
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <LuX className={`text-black dark:text-white/90 font-bold text-xl`} />
            ) : (
              <LuSquare className={`text-black dark:text-white/90 font-bold text-xl`} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
