"use client";
import { useEffect, useState } from "react";
import { navItems } from "../constant/data";
import Link from "next/link";
import { logo } from "../assets/asset";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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
      className={`fixed w-full backdrop-blur-md bg-black/50 z-50 py-2 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0 " : "-translate-y-full "
      }`}
    >
      <nav className="mx-auto w-4/5 flex h-16 justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-16" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item.id} className="text-xl ">
                <Link href={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
