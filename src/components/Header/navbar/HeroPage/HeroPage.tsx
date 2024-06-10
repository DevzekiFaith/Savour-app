import React, { FC } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const HeroPage: FC = () => {
  return (
    <div>
      <section className="absolute z-20 xl:left-[4rem] left-[1rem] xl:top-[12rem] top-[8rem]">
        <div className=" xl:mt-0 mt-[-1rem] font-Raleways_Dot">
          <h1 className="font-extrabold xl:text-[4rem] uppercase text-white mb-0">
            food health
          </h1>
          <p className="text-green-500 mt-0 leading-3 font-Raleways_Dot">
            ...the beginning of Life!
          </p>
          <p className="xl:w-[400px] w-[200px] xl:text-slate-600 text-white mt-4 text-[6px] xl:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            doloribus nihil nisi assumenda blanditiis ullam quasi deleniti
            quaerat optio facilis molestias quibusdam neque sapiente, eligendi
            tenetur placeat voluptatibus amet architecto et magni minus. Ipsa
            nisi, atque sed laudantium libero eveniet eaque. Voluptatibus quas,
            at illum recusandae libero nihil hic natus.
          </p>

          <Link href="/food">
            <button className=" text-white bg-green-800 border-1 shadow-2xl shadow-slate-20  p-[.4rem] xl:w-[18rem] mt-[1rem] font-extrabold hover:scale-95">
              See More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
