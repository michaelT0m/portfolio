import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 border-t border-neutral-700 bottom-0 fixed w-full h-16">
      <div className="w-4/5 mx-auto">
        {/* <Image src={""} alt="logo"/> */}
        <p className="text-2xl font-medium">Michael Tom</p>
        <p>© 2024 Michael Tom. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
