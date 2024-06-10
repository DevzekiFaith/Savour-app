import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/footer/footer.module.scss";

const FooterOverLay = () => {
  return (
    <div className="absolute top-4 w-full">
      <div className="">
        <div className="p-10 bg-gray-900 flex xl:flex-row flex-col justify-between items-center relative ">
          <Link href="/">
            <div className={styles.Logo}>
              <Image
                className=""
                src="/basket2.svg"
                alt="LogoPhoto"
                width={30}
                height={30}
              />
              <p className="w-[80px] pt-[.5rem] text-green-800">
                Savour Food Recipe Lite
              </p>
            </div>
          </Link>
          <div className="footer">
            <div>
              <span>
                <h6 className={styles.footerTitle}>Services</h6>
              </span>
              <span className="flex flex-col text-white text-[14px] text-start">
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>
                <h6 className={styles.footerTitle}>Company</h6>
              </span>
              <span className="flex flex-col text-white text-[14px] text-start">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </span>
            </div>
          </div>
          <div>
            <div className="text-white">
              <span>
                <h6 className={styles.footerTitle}>Legal</h6>
              </span>
              <span className="flex flex-col text-[14px] text-start">
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <a className="link link-hover">Users right</a>
              </span>
            </div>
          </div>
          <div>
            <form>
              <h6 className={styles.footerTitle}>Newsletter</h6>
              <fieldset className="form-control w-80">
                <label className="label text-white text-[16px] text-start">
                  <span className="label-text mt-[1rem]">
                    Enter your email address
                  </span>
                </label>
                <div className="join mt-[1rem]">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item mb-[1rem] h-[2.8rem]"
                  />
                  <button className=" bg-green-500 p-3 font-extrabold">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOverLay;
