import React from "react";
import Image from "next/image";
import Hero2 from "@/components/hero2/Hero2";

const Contact: React.FC = () => {
  return (
    <div className="bg-green-600">
      <Hero2 />
      <section className="pt-[4rem] h-screen mb-[10rem] flex xl:flex-row flex-col xl:gap-[8rem] gap-[1rem]">
        <div className=" mt-[6rem] hidden xl:block relative ">
          <Image
            className="w-[38rem] ml-[2rem]"
            src="/v37.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="w-[300px] absolute left-[8rem] top-[38.8rem] h-[14rem] xl:hidden block">
          <Image
            className="block w-[100%]"
            src="/3d-woman.png"
            alt="contact-Image"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-[12rem]">
          <div>
            <h1 className="bg-green-900 font-Raleways_Dot  text-white w-[8rem] p-1 pl-3 shadow-2xl font-bold">
              Contact us
            </h1>
          </div>
          <h4 className="text-center text-[1rem] uppercase font-extrabold text-white">
            Welcome!
          </h4>
          <div className="w-[500px] shadow-2xl p-3 xl:mt-0 mt-[10rem] ">
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
                type="text"
                placeholder="location"
                id=""
              />
            </span>
            <span className="flex flex-col">
              <label className="mt-2 text-sm">Message</label>
              <textarea
                className=" h-[6rem] mt-2"
                placeholder="  Leave an information...."
                id=""
              />
            </span>

            <button className="bg-green-900 w-full h-[3rem] mt-[2rem] font-extrabold uppercase text-white">
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
