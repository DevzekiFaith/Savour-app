"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, etc.
  }

  return (
    <div className="relative group xl:h-[7rem] xl:mb-[10rem]">
      <section className="xl:mt-[5rem] ">
        <div className="relative xl:mt-0">
          <div className="absolute left-[3rem] flex justify-between items-center xl:mb-0 ">
            <hr className="bg-slate-900  h-[2px] xl:w-[6rem] w-[4rem] xl:ml-[24rem] ml-[1rem] mt-4" />
            <h1 className="font-bold text-[1.5rem]">Client Companies</h1>
            <hr className="bg-slate-900 h-[2px] xl:w-[6rem] w-[4rem] mt-4" />
          </div>
          <div className="flex xl:flex-row flex-col justify-center gap-2 items-center p-[1rem] bg-[#EDEAE0] xl:h-[19rem] xl:mt-0">
            {slide.map((slide, idx) => (
              <div className="" key={idx}>
                <Image
                  className="shadow-2xl xl:mt-0 w-[100%]"
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
        <button type="button" className="text-[3rem]" title="Next">
          <FaCaretRight />
        </button>
      </div>
      <div className="absolute top-[8rem] left-0 hidden group-hover:block cursor-pointer hover:bg-slate-50">
        <button type="button" className="text-[3rem]" title="Previous">
          <FaCaretLeft />
        </button>
      </div>
    </div>
  );
};

export default RecipeCompanies;
