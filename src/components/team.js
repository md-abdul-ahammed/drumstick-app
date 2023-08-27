import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import p1 from "/public/images/p1.png";
import p2 from "/public/images/p2.png";
import p3 from "/public/images/p3.png";
import p4 from "/public/images/p4.png";
import p5 from "/public/images/p5.png";
import p6 from "/public/images/p6.png";
import p7 from "/public/images/p7.png";
import p8 from "/public/images/p8.png";
import p9 from "/public/images/p9.png";
import founderText from "/public/images/founder-text.svg";
import teamText from "/public/images/team-text.svg";
import teamText1 from "/public/images/team-text1.svg";
import logo3 from "/public/images/logo3.png";
import backBlackIcon from "/public/images/backBlack.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

const Team = () => {
  const router = useRouter();

  const handleMouseEnter = () => {
    scroller.scrollTo("team", {
      smooth: true,
      duration: 700,
    });
    router.push(`/#team`);
  };

  return (
    <div
      id="team"
      onMouseEnter={handleMouseEnter}
      className="bg-white py-0 mb-4 md:mb-12 md:py-8"
    >
      <div className="w-full h-[1px] block md:hidden mt-4 bg-gray-400"></div>

      <div className="2xl:px-[20rem] md:px-[12rem] px-8 mt-6 2xl:mt-3">
        <div className="text-center block md:hidden font-extrabold pb-6 text-2xl md:text-8xl">
          OUR TEAM
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <div>
            <div className="bg-[#D9D9D9] w-full md:h-[35vh] h-[25vh] 2xl:h-[35vh] relative">
              <Image
                src={p1}
                alt="bg"
                height={292}
                className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[40%]"
                width={292}
              />
              <Image
                src={founderText}
                alt="bg"
                height={105}
                className="absolute left-[3%] top-[0%]"
                width={12}
              />
            </div>
            <div className="flex md:translate-y-[-20px] translate-y-[-12px] flex-col">
              <div className="text-[#1F2520] text-right md:text-[24px] text-[16px] font-light">
                Vedikkaranpatti S. Sakthivel
              </div>
              <div className="text-[#1F2520] text-right md:text-[16px] text-[14px] font-extralight">
                PRODUCER
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D9D9D9] w-full md:h-[35vh] h-[25vh] 2xl:h-[35vh] relative">
              <Image
                src={p2}
                alt="bg"
                height={292}
                className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[40%]"
                width={292}
              />
              <Image
                src={founderText}
                alt="bg"
                height={105}
                className="absolute left-[3%] top-[0%]"
                width={12}
              />
            </div>
            <div className="flex md:translate-y-[-20px] translate-y-[-12px] flex-col">
              <div className="text-[#1F2520] text-right md:text-[24px] text-[16px] font-light">
                S. Vijayan
              </div>
              <div className="text-[#1F2520] text-right md:text-[16px] text-[14px] font-extralight">
                PRODUCER
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
          <div></div>
          <div>
            <div className="bg-[#D9D9D9] w-full md:h-[32vh] h-[25vh] 2xl:h-[28vh] relative">
              <Image
                src={p3}
                alt="bg"
                height={292}
                className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[45%]"
                width={292}
              />
              <Image
                src={teamText}
                alt="bg"
                height={160}
                className="absolute left-[3%] top-[0%]"
                width={10}
              />
            </div>
            <div className="flex md:translate-y-[-18px] translate-y-[-12px]  flex-col">
              <div className="text-[#1F2520] text-right md:text-[20px] text-[16px]  font-light">
                Vivek Chandar
              </div>
              <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                Executive Director
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D9D9D9] w-full md:h-[32vh] h-[25vh] 2xl:h-[28vh] relative">
              <Image
                src={p5}
                alt="bg"
                height={346}
                className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[45%]"
                width={346}
              />
            </div>
            <div className="flex md:translate-y-[-18px] translate-y-[-12px] flex-col">
              <div className="text-[#1F2520] text-right md:text-[20px] text-[16px] font-light">
                Panneerselvam
              </div>
              <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                Finance Director
              </div>
            </div>
          </div>
        </div>
        {/* bottom-section-start-from-here */}
        <div className="grid grid-cols-12 mt-0 md:mt-4">
          <div className="col-span-6 translate-x-[-8rem] translate-y-[-5rem]">
            <div className="hidden md:block">
              <div className="text-[90px] h-full 2xl:text-[110px] md:leading-[100px] 2xl:leading-[130px] flex justify-start text-[#000] items-center font-black">
                O U R <br /> T E A M
              </div>
            </div>
          </div>
          <div className="md:col-span-3 col-span-12">
            <div className="bg-[#D9D9D9] w-full md:w-[85%] 2xl:w-[85%] md:ml-auto ml-0 md:h-[30vh] h-[25vh] 2xl:h-[25vh] relative">
              <Image
                src={p4}
                alt="bg"
                height={292}
                className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[47%] md:w-[65%] 2xl:w-[55%]"
                width={292}
              />
              <Image
                src={teamText1}
                alt="bg"
                height={160}
                className="absolute left-[3%] top-[0%]"
                width={10}
              />
            </div>
            <div className="flex md:translate-y-[-18px] translate-y-[-12px]  flex-col">
              <div className="text-[#1F2520] text-right md:text-[18px] text-[16px]  font-light">
                Aravindh
              </div>
              <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                Chairman
              </div>
            </div>
          </div>
          <div className="md:col-span-3 col-span-12">
            <div className="bg-[#D9D9D9] w-full md:w-[85%] 2xl:w-[85%] md:ml-auto ml-0 md:h-[30vh] h-[25vh] 2xl:h-[25vh] relative">
              <Image
                src={p9}
                alt="bg"
                height={292}
                className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[47%] md:w-[65%] 2xl:w-[55%]"
                width={292}
              />
            </div>
            <div className="flex md:translate-y-[-18px] translate-y-[-12px]  flex-col">
              <div className="text-[#1F2520] text-right md:text-[18px] text-[16px]  font-light">
                Siva Shankar
              </div>
              <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                Production Officer
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 mt-0 md:mt-4">
          <div className="col-span-2 hidden md:block h-full">
            {/* <div className="text-[110px] h-full 2xl:text-[135px] flex justify-start items-center font-black">
              TEAM
            </div> */}
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-1 md:w-[80%] ml-auto w-full md:grid-cols-3 gap-x-8">
              <div>
                {/* <div className="bg-[#D9D9D9] w-full h-[25vh] md:h-[27vh] 2xl:h-[23vh] relative">
                  <Image
                    src={p8}
                    alt="bg"
                    height={600}
                    className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[45%] 2xl:w-[40%]"
                    width={600}
                  />
                </div>
                <div className="flex translate-y-[-10px] 2xl:translate-y-[-12px] flex-col">
                  <div className="text-[#1F2520] text-right md:text-[16px] text-[14px] 2xl:text-[20px] font-light">
                    Gunasekaran
                  </div>
                  <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                    Manager - Strategies
                  </div>
                </div> */}
              </div>
              <div>
                <div className="bg-[#D9D9D9] w-full h-[25vh] md:h-[27vh] 2xl:h-[23vh] relative">
                  <Image
                    src={p6}
                    alt="bg"
                    height={600}
                    className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[45%] 2xl:w-[40%]"
                    width={600}
                  />
                </div>
                <div className="flex translate-y-[-10px] 2xl:translate-y-[-12px] flex-col">
                  <div className="text-[#1F2520] text-right md:text-[16px] text-[14px] 2xl:text-[20px] font-light">
                    N.G Arjun
                  </div>
                  <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                    General Manager
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#D9D9D9] w-full h-[25vh] md:h-[27vh] 2xl:h-[23vh] relative">
                  <Image
                    src={p7}
                    alt="bg"
                    height={600}
                    className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] w-[50%]"
                    width={600}
                  />
                </div>
                <div className="flex translate-y-[-10px] 2xl:translate-y-[-12px] flex-col">
                  <div className="text-[#1F2520] text-right md:text-[16px] text-[14px] 2xl:text-[20px] font-light">
                    R. Nandha Kumar
                  </div>
                  <div className="text-[#1F2520] text-right text-[14px] 2xl:text-[13px] font-extralight">
                    Executive Officer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
