import React, { FC } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const HeroPage: FC = () => {
  return (
    <div>
      <section className="absolute z-20 left-[4rem] top-[12rem]">
        <div>
          <h1 className="font-extrabold text-[4rem] uppercase text-white mb-0">
            food health
          </h1>
          <p className="text-green-500 mt-0 leading-3">
            ...the beginning of Life!
          </p>
          <p className="w-[400px] text-slate-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            doloribus nihil nisi assumenda blanditiis ullam quasi deleniti
            quaerat optio facilis molestias quibusdam neque sapiente, eligendi
            tenetur placeat voluptatibus amet architecto et magni minus. Ipsa
            nisi, atque sed laudantium libero eveniet eaque. Voluptatibus quas,
            at illum recusandae libero nihil hic natus.
          </p>

          <Link href="/food">
            <button className=" text-white bg-[#F1916D] border-1 shadow-2xl shadow-slate-20  p-[.4rem] w-[18rem] mt-[1rem] font-extrabold hover:scale-95">
              See More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
