"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

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
  const [toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(true);
  };
  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <div>
      <section className="relative">
        <div className=" flex justify-between gap-4 xl:left-[3.8rem] items-center w-full mt-[1rem] xl:z-[40]  fixed  pb-4 ">
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
            <div className="xl:block hidden relative">
              <div className=" flex justify-center items-center bg-transparent xl:gap-4  w-full text-orange-800 font-extrabold">
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
        </div>

        {/* MOBILE SECTION OPTIMIZATION */}

        <div className="">
          {!toggle ? (
            <div className=" " onClick={HandleToggle}>
              <FaAlignJustify className="absolute top-6 right-4 text-white xl:hidden w-[2rem] h-[2rem]" />
            </div>
          ) : (
            <div className="absolute  top-[4rem] right-[4rem]  w-[12rem] h-[16rem] p-[1rem] z-[100] ">
              <div
                className="absolute top-6 right-[-3.5rem]"
                onClick={closeToggle}
              >
                <FaRegTimesCircle className="text-white w-[2rem] h-[2rem] top-6 right-4" />
              </div>
              <div className="text-white flex flex-col justify-center items-center gap-[2rem] bg-slate-900 mt-[-3rem] z-20">
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
          )}
        </div>
      </section>
    </div>
  );
};

export default NavList;
