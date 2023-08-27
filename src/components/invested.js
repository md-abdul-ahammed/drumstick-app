import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "/public/images/invested1.png";
import img2 from "/public/images/invested2.png";
import img3 from "/public/images/invested3.png";
import img4 from "/public/images/invested4.png";
import imgH1 from "/public/images/invested-h1.png";
import imgH2 from "/public/images/invested-h2.png";
import imgH3 from "/public/images/invested-h3.png";
import imgH4 from "/public/images/invested-h4.png";
import iMobile1 from "/public/images/investedMobile1.png";
import iMobile2 from "/public/images/investedMobile2.png";
import iMobile3 from "/public/images/investedMobile3.png";
import iMobile4 from "/public/images/investedMobile4.png";
import back from "/public/images/backW.svg";
import logo from "/public/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import MobileFooter from "./MobileFooter";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Invested = ({ setSection }) => {
  const [hoverIndex, setHoveIndex] = useState(0);
  const router = useRouter();

  const handleMouseEnter = () => {
    scroller.scrollTo("invested", {
      smooth: true,
      duration: 700,
    });

    router.push(`/#invested`);
  };
  return (
    <div
      id="invested"
      onMouseEnter={handleMouseEnter}
      className="md:h-screen h-auto bg-transparent md:bg-[#1f2520] "
    >
      <div className="w-full h-[1px] block md:hidden my-6 bg-gray-400"></div>

      <div className="h-[70%] relative">
        {/* <Navbar isItHomePage /> */}
        <div className="md:px-16 px-8 flex items-center h-[100%]">
          <div className="grid grid-cols-1 md:grid-cols-11 w-full gap-y-4 gap-x-0 md:gap-x-6 md:gap-y-6">
            <div className="col-span-3 hidden md:block text-[44px] text-black md:text-white text-right font-bold">
              WE ARE
              <br />
              VERY
              <br />
              INVESTED
            </div>
            <div className="text-center block md:hidden font-extrabold pb-6 text-2xl md:text-8xl">
              WE ARE VERY
              <br />
              INVESTED
            </div>

            {/* ===============mobile version image start from here=================== */}
            <div className="block md:hidden">
              <a
                href="https://www.instagram.com/tnbslofficial/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={310}
                  height={140}
                  src={iMobile1}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            <div className="block md:hidden">
              <a
                href=" https://clustersmediacollege.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={310}
                  height={140}
                  src={iMobile2}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            <div className="block md:hidden">
              <a
                href=" https://www.pharmbiozhealthcare.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={310}
                  height={140}
                  src={iMobile3}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            <div className="block md:hidden">
              <a
                href=" https://themetawood.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={310}
                  height={140}
                  src={iMobile4}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            {/* ===============mobile version image end from here=================== */}
            <div
              onMouseEnter={() => setHoveIndex(1)}
              onMouseLeave={() => setHoveIndex(0)}
              className="col-span-2 hidden md:block"
            >
              <a
                href="https://www.instagram.com/tnbslofficial/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={200}
                  height={200}
                  src={hoverIndex === 1 ? imgH1 : img1}
                  alt=""
                />
              </a>
            </div>
            <div
              onMouseEnter={() => setHoveIndex(2)}
              onMouseLeave={() => setHoveIndex(0)}
              className="col-span-2 hidden md:block"
            >
              <a
                href=" https://clustersmediacollege.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={200}
                  height={200}
                  src={hoverIndex === 2 ? imgH2 : img2}
                  alt=""
                />
              </a>
            </div>
            <div
              onMouseEnter={() => setHoveIndex(3)}
              onMouseLeave={() => setHoveIndex(0)}
              className="col-span-2 hidden md:block"
            >
              <a
                href=" https://www.pharmbiozhealthcare.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={200}
                  height={200}
                  src={hoverIndex === 3 ? imgH3 : img3}
                  alt=""
                />
              </a>
            </div>
            <div
              onMouseEnter={() => setHoveIndex(4)}
              onMouseLeave={() => setHoveIndex(0)}
              className="col-span-2 hidden md:block"
            >
              <a
                href=" https://themetawood.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={200}
                  height={200}
                  src={hoverIndex === 4 ? imgH4 : img4}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="absolute right-[30px] bottom-[20px]">
          <button className="flex items-center space-x-3">
            <Link href={"/#home"} className="text-white">
              BACK TO HOME
            </Link>
            <Image src={back} alt="back" width={31} height={12} />
          </button>
        </div> */}
      </div>
      <div className="bg-white hidden md:block h-[30%] px-16">
        <div className="grid text-[#1F2520]  w-full h-full grid-cols-12 pb-5 ">
          <div className="col-span-2 flex items-end border-r border-[#00000033]">
            <Image src={logo} width={100} height={85} alt="" />
          </div>
          <div className="col-span-5 pl-5  flex items-end border-r border-[#00000033]">
            <div className="w-full">
              <div className="text-[14px] font-medium mb-5">
                DRUMSTICK PRODUCTIONS
              </div>
              <div className="grid grid-cols-6">
                <div className="flex flex-col">
                  <Link
                    href="/#home"
                    className="font-light text-start text-[14px] mb-2"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/#films"
                    className="font-light text-start text-[14px]"
                  >
                    ALL FILMS
                  </Link>
                </div>
                <div className="flex col-span-3 pl-6 flex-col">
                  <Link
                    href="/#team"
                    className="font-light text-start text-[14px]  mb-2"
                  >
                    OUR TEAM
                  </Link>
                  <Link
                    href="/#invested"
                    className="font-light text-start text-[14px]"
                  >
                    WE ARE VERY INVESTED
                  </Link>
                </div>
                <div className="flex col-span-2 flex-col">
                  <Link
                    href="/script-submit"
                    className="font-light text-start text-[14px]  mb-2"
                  >
                    SUBMIT YOUR STORY
                  </Link>
                  <Link
                    href="/behind-the-scenes"
                    className="font-light text-start text-[14px]"
                  >
                    BEHIND THE SCENE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 pl-5  flex items-end border-r border-[#00000033]">
            <div className="w-full">
              <div className="text-[14px] font-medium mb-5">SOCIAL</div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <button className="font-light flex items-center space-x-2 text-start text-[14px] mb-2">
                    <AiFillFacebook className="scale-[1.3]" />{" "}
                    <span>FACEBOOK</span>
                  </button>
                  <button className="font-light flex items-center space-x-2 text-start text-[14px]">
                    <AiFillTwitterSquare className="scale-[1.3]" />{" "}
                    <span>TWITTER</span>
                  </button>
                </div>

                <div className="flex flex-col">
                  <button className="font-light flex items-center space-x-2 text-start text-[14px]  mb-2">
                    <AiFillYoutube /> <span>YOUTUBE</span>
                  </button>
                  <button className="font-light flex items-center space-x-2 text-start text-[14px]">
                    <AiFillInstagram className="scale-[1.3]" />{" "}
                    <span>INSTAGRAM</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 pl-5 flex items-end">
            <div className="w-full">
              <button className="font-light text-start text-[14px]  mb-2">
                Privacy Policy
              </button>
              <button className="font-light text-start text-[14px]  mb-2">
                Terms & Conditions
              </button>
              <div className="font-light text-start text-[14px]">
                ©drumstickproductions.com2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter setSection={setSection} />
    </div>
  );
};

export default Invested;
