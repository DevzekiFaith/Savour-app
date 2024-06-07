import React from "react";
import Image from "next/image";

const OverLay: React.FC = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 top-[-37.5rem] bg-slate-900 h-[680px] bg-opacity-50 backdrop-blur-sm ">
          {/* <h1 className="text-slate-600 uppercase font-extrabold text-[3rem] ml-[4rem] opacity-30">
            Diet Diary...
          </h1> */}
        </div>
        <div className="flex ">
          <div className="absolute bottom-6 left-[4rem] flex justify-between items-center gap-[4rem]">
            <Image
              className="w-[600px] h-[400px] rounded-2xl shadow-2xl shadow-slate-900"
              src="/p2.jpg"
              alt="Food-Image"
              width={300}
              height={300}
            />
            <div>
              <p className="w-[400px] text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                minus sapiente delectus asperiores explicabo aspernatur
                molestiae veritatis dolore eveniet, culpa placeat error rerum
                corporis laborum voluptas soluta perspiciatis alias sit dolorum
                reiciendis! Voluptas iure itaque inventore quae repudiandae,
                quasi nesciunt similique perspiciatis? Esse quam atque beatae
                ab! Dignissimos, voluptate aut.
              </p>

              <button className="border-2 p-3 font-bold uppercase text-slate-300 mt-2">
                Recipe Schedule
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverLay;
