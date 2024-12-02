"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { logo } from "@/app/assets/asset";
import { socialIcons } from "../constant/data";
import { LuArrowUp, LuSun, LuMoon, LuMonitor } from "react-icons/lu";

console.log();

const Footer = () => {
  const [hover, setHover] = useState(false);
  // const [theme, setTheme] = useState(
  //   window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  // );
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "prefers-color-scheme: dark"
      ).matches;

      const initialTheme = prefersDarkMode ? "dark" : "light";
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }
  }, []);

  const applyTheme = (selectedTheme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <footer className="border-t dark:border-neutral-900 bg-light-background dark:bg-dark-background select-none relative ">
      <div className="w-4/5 mx-auto py-6 flex justify-between flex-col lg:flex-row gap-4 items-center">
        <div className="flex items-center gap-4 flex-col lg:flex-row ">
          <Link
            href={"#hero"}
            onClick={() => setHover(!hover)}
            className={`${
              hover &&
              "size-16 rounded-full flex justify-center items-center text-4xl font-bold bg-secondary"
            }`}
          >
            {hover ? (
              <LuArrowUp />
            ) : (
              <Image src={logo} alt="logo" className="w-16" />
            )}
          </Link>
          <h3 className="text-2xl lg:text-4xl font-bold ">
            &copy; 2024 Michael Tom
          </h3>
        </div>

        <div className="flex gap-4">
          {socialIcons.map((item) => (
            <Button key={item.id} ibtn Icon={item.Icon} href={item.link} />
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-secondary p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none absolute top-0 -translate-y-1/2 right-4 -translate-x-1/2"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <LuMoon className="text-secondary w-6 h-6" />
          ) : (
            <LuSun className="text-neutral-200 w-6 h-6" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
