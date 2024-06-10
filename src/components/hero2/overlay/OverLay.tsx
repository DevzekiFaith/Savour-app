import React from "react";
import Image from "next/image";

const OverLay: React.FC = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 top-[-37.5rem] bg-slate-900 xl:h-[680px] bg-opacity-50 backdrop-blur-sm ">
          <div className="flex xl:flex-row">
            <div className="absolute xl:bottom-6 xl:top-10 xl:left-[4rem] flex xl:flex-row flex-col justify-between items-center xl:gap-[5rem]">
              <Image
                className="xl:w-[600px] xl:h-[400px] rounded-2xl shadow-2xl shadow-slate-900 w-[100%] xl:mt-0 mt-[3rem]"
                src="/p2.jpg"
                alt="Food-Image"
                width={300}
                height={300}
              />
              <div className="">
                <p className="xl:w-[400px] text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime minus sapiente delectus asperiores explicabo aspernatur
                  molestiae veritatis dolore eveniet, culpa placeat error rerum
                  corporis laborum voluptas soluta perspiciatis alias sit
                  dolorum reiciendis! Voluptas iure itaque inventore quae
                  repudiandae, quasi nesciunt similique perspiciatis? Esse quam
                  atque beatae ab! Dignissimos, voluptate aut.
                </p>

                <button className="border-2 p-3 font-bold bg-green-800 uppercase text-slate-300 mt-2">
                  Recipe Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverLay;
