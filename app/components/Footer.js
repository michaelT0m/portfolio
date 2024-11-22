"use client";
import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { socialIcons } from "../constant/data";
import { logo } from "@/app/assets/asset";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black select-none">
      <div className="w-4/5 mx-auto py-6 flex justify-between flex-col lg:flex-row gap-4 items-center">
        <div className="flex items-center gap-4 flex-col lg:flex-row ">
          <Link href={"#"}>
            <Image src={logo} alt="logo" className="w-16" />
          </Link>
          <h3 className="text-2xl lg:text-4xl font-bold ">
            &copy; 2024 Michael Tom
          </h3>
        </div>

        <div className="space-x-4">
          {socialIcons.map((item) => (
            <Button
              key={item.id}
              ibtn
              RIcon={item.Icon}
              className={`hover:translate-x-4`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
