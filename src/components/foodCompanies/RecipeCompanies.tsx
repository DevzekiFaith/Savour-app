"use client";

import React from "react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";
import { useState } from "react";

type slide = {
  id: number;
  src: string;
};

const slide: slide[] = [
  { id: 1, src: "/v31.png" },
  { id: 2, src: "/v32.png" },
  { id: 3, src: "/v33.png" },
  { id: 4, src: "/v34.png" },
  { id: 5, src: "/v35.png" },
  { id: 6, src: "/v36.png" },
];

type props = {
  clickNext: any;
  clickPrev: any;
};

const RecipeCompanies = () => {
  return (
    <div className="relative group h-[7rem] mb-[10rem]">
      <section className="mt-[5rem] ">
        <div className="relative">
          <div className="absolute left-[3rem] flex justify-between items-center">
            <hr className="bg-slate-900  h-[2px] w-[6rem] ml-[24rem] mt-4" />
            <h1 className="font-bold text-[1.5rem]">Client Companies</h1>
            <hr className="bg-slate-900 h-[2px] w-[6rem] mt-4" />
          </div>
          <div className="flex justify-center gap-2 items-center p-[1rem] bg-[#EDEAE0] h-[19rem]">
            {slide.map((slide, idx) => (
              <div key={idx}>
                <Image className="shadow-2xl"
                  src={slide.src}
                  alt="Slide Images"
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute top-[8rem] right-3 hidden group-hover:block hover:bg-slate-50 cursor-pointer">
        <button className="text-[3rem]">
          <FaCaretRight />
        </button>
      </div>
      <div className="absolute top-[8rem] left-0 hidden group-hover:block cursor-pointer hover:bg-slate-50">
        <button className="text-[3rem]">
          <FaCaretLeft />
        </button>
      </div>
    </div>
  );
};

export default RecipeCompanies;
