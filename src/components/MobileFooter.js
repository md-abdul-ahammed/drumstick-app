import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/images/logo.png";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const MobileFooter = ({ setSection }) => {
  return (
    <div className="block overflow-hidden md:hidden">
      <div className="mt-8 mb-4">
        <div className="px-4">
          <div className="text-[12px] font-medium mb-5">
            DRUMSTICK PRODUCTIONS
          </div>
          <div className="grid grid-cols-9">
            <div className="flex col-span-2 flex-col">
              <Link
                onClick={() => setSection(1)}
                href="/#home"
                className="font-light text-start text-[12px] mb-2"
              >
                HOME
              </Link>
              <Link
                href="/#films"
                className="font-light text-start text-[12px]"
              >
                ALL FILMS
              </Link>
            </div>
            <div className="flex col-span-4 flex-col">
              <Link
                href="/#team"
                className="font-light text-start text-[12px]  mb-2"
              >
                OUR TEAM
              </Link>
              <Link
                href="/#invested"
                className="font-light text-start text-[12px]"
              >
                WE ARE VERY INVESTED
              </Link>
            </div>
            <div className="flex col-span-3 flex-col">
              <Link
                href="/script-submit"
                className="font-light text-start text-[12px]  mb-2"
              >
                SUBMIT YOUR STORY
              </Link>
              <Link
                href="/behind-the-scenes"
                className="font-light text-start text-[12px]"
              >
                BEHIND THE SCENE
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] block md:hidden my-6 bg-gray-400"></div>
        <div>
          <div className="text-[12px] px-4 font-medium mb-5">SOCIAL</div>
          <div className="grid items-center grid-cols-2">
            <div className="flex flex-col">
              <div className="w-full">
                <div className="grid px-4 grid-cols-1">
                  <div className="flex space-x-8 w-full items-center">
                    <AiFillFacebook className="scale-[1.5] " />
                    <AiFillTwitterCircle className="scale-[1.5] " />
                    <AiFillYoutube className="scale-[1.5] " />
                    <AiFillInstagram className="scale-[1.5] " />
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] block md:hidden my-6 bg-gray-400"></div>

              <div className="w-full pl-4">
                <div className="flex flex-col">
                  <button className="font-light text-start text-[12px]  mb-2">
                    Privacy Policy
                  </button>
                  <button className="font-light text-start text-[12px]  mb-2">
                    Terms & Conditions
                  </button>
                  <div className="font-light text-start text-[12px]">
                    ©drumstickproductions.com2023
                  </div>
                </div>
              </div>
            </div>
            <div className="pr-4 flex h-[50%] scale-125 pl-4 justify-center">
              <Image src={logo} width={100} height={85} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
