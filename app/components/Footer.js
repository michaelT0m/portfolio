"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { logo } from "@/app/assets/asset";
import { socialIcons } from "../constant/data";
import { LuArrowUp } from "react-icons/lu";

const Footer = () => {
  const [hover, setHover] = useState(false);

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
            {/* <Image src={logo} alt="logo" className="w-16" /> */}
          </Link>
          <h3 className="text-2xl lg:text-4xl font-bold ">
            &copy; 2024 Michael Tom
          </h3>
        </div>

        <div className="flex gap-4">
          {socialIcons.map((item) => (
            <Button
              key={item.id}
              ibtn
              Icon={item.Icon}
              href={item.link}
            />
          ))}
        </div>

        {/* <Link
          href={"#hero"}
          className="size-16 rounded-full flex justify-center items-center text-4xl font-bold bg-secondary"
        >
          <LuArrowUp />
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
