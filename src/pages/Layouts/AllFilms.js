import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import bg1 from "/public/images/bg-1.png";
import bg2 from "/public/images/bg-2.png";
import bg3 from "/public/images/bg-3.png";
import bg4 from "/public/images/bg-4.png";
import backIcon from "/public/images/backIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import Head from "next/head";

const AllFilms = () => {
  const [hover, setHover] = useState(1);
  const router = useRouter();

  const handleMouseEnter = () => {
    scroller.scrollTo("home", {
      smooth: true,
      duration: 700,
    });

    router.push(`/#home`);
  };

  return (
    <>
      <Head>
        <title>Our Films</title>
        <meta
          name="description"
          content="We’ve been busy producing good films with your favourite stars. Check out the shooting stills, posters and trailers here."
        ></meta>
      </Head>
      <div
        onMouseEnter={handleMouseEnter}
        id="home"
        className="h-screen w-full relative"
      >
        <Navbar isItHomePage />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={
                hover === 1 ? bg1 : hover === 2 ? bg2 : hover === 3 ? bg4 : bg3
              }
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-overlay"></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-12 w-fit">
          <div className="flex space-y-2 flex-col">
            <div
              onMouseEnter={() => setHover(1)}
              className={`${
                hover === 1 ? "text-[#ffffff]" : "text-[#ffffff66]"
              } cursor-pointer font-semibold text-2xl`}
            >
              KATHAR BASHA ENDRA MUTHURAMALINGAM{" "}
              <sup
                className="text-[14px] font-light ml-1 uppercase
            "
              >
                2023
              </sup>
            </div>
            <div
              onMouseEnter={() => setHover(2)}
              className={`${
                hover === 2 ? "text-[#ffffff]" : "text-[#ffffff66]"
              } cursor-pointer font-semibold text-2xl`}
            >
              YAANAI
              <sup className="text-[14px] font-light ml-1">2022</sup>
            </div>
            <div
              onMouseEnter={() => setHover(3)}
              className={`${
                hover === 3 ? "text-[#ffffff]" : "text-[#ffffff66]"
              } cursor-pointer font-semibold text-2xl`}
            >
              IMAIKKAA NODIGAL
              <sup className="text-[14px] font-light ml-1">2018</sup>
            </div>
            <div
              onMouseEnter={() => setHover(4)}
              className={`${
                hover === 4 ? "text-[#ffffff]" : "text-[#ffffff66]"
              } cursor-pointer font-semibold text-2xl`}
            >
              TRISHA ILLANA NAYANTHARA
              <sup className="text-[14px] font-light ml-1">2016</sup>
            </div>
          </div>
        </div>
        {/* <div className="absolute right-[30px] bottom-[20px]">
        <Link href={"/films"} className="flex items-center space-x-3">
          <Image src={backIcon} alt="back" width={31} height={12} />
          <Link href={"/films"} className="text-white">
            ALL FILMS
          </Link>
        </Link>
      </div> */}
      </div>
    </>
  );
};

export default AllFilms;
