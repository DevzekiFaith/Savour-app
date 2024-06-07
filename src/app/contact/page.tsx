import React from "react";
import Image from "next/image";
import Hero2 from "@/components/hero2/Hero2";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#9ac9eabf]">
      <Hero2 />
      <section className="pt-[4rem] h-screen mb-[10rem] flex gap-[8rem]">
        <div className=" mt-[6rem] ">
          <Image
            className="w-[38rem] ml-[2rem]"
            src="/v37.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="mt-[12rem]">
          <div>
            <h1 className="bg-orange-300  text-white w-[8rem] p-1 pl-3 shadow-2xl">
              Contact us
            </h1>
          </div>
          <h4 className="text-center text-[1rem] uppercase font-extrabold text-white">
            Welcome!
          </h4>
          <div className="w-[400px] shadow-2xl p-3">
            <span className="flex flex-col">
              <label className=" text-sm mt-2">Name</label>
              <input
                className="rounded-full h-[3rem] mt-3"
                type="text"
                placeholder="name"
                id=""
              />
            </span>
            <span className="flex flex-col">
              <label className="mt-2 text-sm">Email</label>
              <input
                className="rounded-full h-[3rem] mt-3"
                type="text"
                placeholder="email"
                id=""
              />
            </span>
            <span className="flex flex-col">
              <label className="mt-2 text-sm">location</label>
              <input
                className="rounded-full h-[3rem] mt-3"
                type="number"
                placeholder="location"
                id=""
              />
            </span>
            <span className="flex flex-col">
              <label className="mt-2 text-sm">Message</label>
              <textarea className=" h-[6rem] mt-2" name="" id="">
                Leave an information....
              </textarea>
            </span>

            <button className="bg-[#4A99D3] w-full h-[3rem] mt-[2rem] font-extrabold uppercase">
              send
            </button>
          </div>
        </div>
      </section>
      <Hero2 />
    </div>
  );
};

export default Contact;
