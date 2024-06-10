import React from "react";
import Image from "next/image";
import FooterOverLay from "./FooterOverLay";
import styles from "@/Component/footer/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className="">
      <section className="mt-[2rem] relative">
        <div className="">
          <Image
            className="w-full xl:h-[250px] bg-opacity-45"
            src="/ft1.png"
            alt="Footer Image"
            width={300}
            height={300}
          />
        </div>
      <FooterOverLay/>
      </section>
    </div>
  );
};

export default Footer;
