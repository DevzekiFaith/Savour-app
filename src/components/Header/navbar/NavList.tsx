"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// CLARIFY THE DATA TYPE FIRSTLY

type NavLink = {
  name: string;
  path: string;
};

// CREATE THE DATA ARRAY SECONDLY

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Food Catalogue", path: "/food" },
  { name: "Contact", path: "/contact" },
  { name: "NewsLetter", path: "/newsletter" },
];

const NavList: React.FC = () => {
  const pathname: string = usePathname();
  const isActive = (path: string): boolean => path === pathname;

  return (
    <div className=" flex justify-between gap-4 left-[3.8rem] items-center w-full mt-[1rem] fixed z-[40] pb-4">
      <div className="flex justify-center items-center gap-4">
        <div className="w-[3rem] h-[3rem]">
          <Link href="/">
            <Image
              className="w-[30px] flex justify-center items-center ml-[.68rem] mt-[.6rem]"
              src="/basket2.svg"
              width={20}
              height={20}
              alt="NavLogo"
            />
          </Link>
        </div>

        {/* // MAP THIRDLY */}

        <div className="flex justify-center items-center bg-transparent gap-4 text-extrabold w-full text-[#DFB6B2]">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={isActive(link.path) ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavList;
