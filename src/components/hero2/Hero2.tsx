import React from "react";
import Image from "next/image";
import OverLay from "./overlay/OverLay";

const Hero2: React.FC = () => {
  return (
    <>
      <section className="">
        <div className="w-full h-[600px] relative ">
          <Image
            className="xl:w-full xl:h-[680px]"
            src="/hero-image2.jpg"
            width={300}
            height={400}
            alt="heroImage"
          />
        </div>
      </section>
      <section className="">
        <div className="relative">
          <div className="absolute right-0 bottom-[3rem] mr-[3rem]">
            <h1 className="font-extrabold text-[2rem] uppercase">
              Good diet...
            </h1>
            <p className=" p-4">Nurishment is the gateway to longevity </p>
            <h4 className="w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus eaque doloremque eum hic ex perspiciatis labore,
              praesentium neque nisi dolore ea, quae commodi quaerat! Sunt,
              recusandae delectus, provident officia nulla ratione aperiam
              doloribus id et quis ullam minima. Similique beatae error expedita
              fugiat tempore cupiditate autem reprehenderit hic eius non
              repellat voluptate quis soluta explicabo quisquam, dolorem
              voluptatum voluptas labore quae incidunt quos, esse voluptates.
              Incidunt neque explicabo illo fugiat ad at dolores modi qui! Quas
              inventore sit veniam in vel itaque, earum labore, accusamus
              asperiores doloremque suscipit? Praesentium laudantium earum ipsa
              numquam, temporibus ut ea esse recusandae labore rem.
            </h4>
          </div>
          <div>
            <OverLay />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
