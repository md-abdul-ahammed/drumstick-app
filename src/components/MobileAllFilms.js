import React, { useEffect, useState } from "react";
import bg1 from "/public/images/mobile-bg-1.png";
import bg2 from "/public/images/mobile-bg-2.png";
import bg3 from "/public/images/mobile-bg-3.png";
import bg4 from "/public/images/mobile-bg-4.png";
import arrowBottom from "/public/images/Icon/arrow-bottom.svg";
import Navbar from "./Navbar";
import Image from "next/image";
import { Touch } from "@/utils/utils";
import { useRouter } from "next/router";

const MobileAllFilms = ({ section, setSection }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [time] = useState(300);
  const router = useRouter();

  const handleScroll = (e) => {
    const scrollUp = Boolean(
      e.deltaY < 0 ||
        e.code === "ArrowUP" ||
        e.code === "ArrowLeft" ||
        e === "down"
    );
    const scrollDown = Boolean(
      e.deltaY > 0 ||
        e.code === "ArrowDown" ||
        e.code === "ArrowRight" ||
        e === "up"
    );
    if (!isScroll) {
      setIsScroll(true);
      let interval;
      if (scrollDown) {
        if (section < 7) {
          setSection(section + 1);
        }
      }
      if (scrollUp) {
        if (section > 1) {
          setSection(section - 1);
        }
      }
      interval = setTimeout(() => {
        setIsScroll(false);
      }, time);
    }
  };

  useEffect(() => {
    if (section > 4) {
      router.push("/#films");
      // setSection(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);
  return (
    <div
      // onMouseEnter={handleMouseEnter}
      id="home"
      className="h-screen w-full relative"
    >
      <Navbar setSection={setSection} isItMobileVersion />
      <div
        tabIndex="0"
        onKeyDown={(e) => handleScroll(e)}
        onWheel={(e) => handleScroll(e)}
        onTouchStart={(e) => Touch.handleTouchStart(e)}
        onTouchMove={(e) => {
          let action = Touch.handleTouchMove(e);
          if (action == "up") {
            handleScroll("up");
          }
          if (action == "down") {
            handleScroll("down");
          }
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="relative w-full h-full">
          {section == 1 && (
            <Image className="w-full h-full object-center" src={bg1} alt="" />
          )}
          {section == 2 && (
            <Image className="w-full h-full object-center" src={bg2} alt="" />
          )}
          {section == 3 && (
            <Image className="w-full h-full object-center" src={bg3} alt="" />
          )}
          {section == 4 && (
            <Image className="w-full h-full object-center" src={bg4} alt="" />
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-custom-overlay-mobile"></div>
        </div>
      </div>
      <div className="absolute bottom-[15%] left-8 w-[60vw]">
        <div className="flex space-y-2 flex-col">
          {section === 1 && (
            <div
              className={`text-[#ffffff] cursor-pointer font-semibold text-[1.5rem]`}
            >
              KATHAR BASHA ENDRA MUTHURAMALINGAM <br />
              <sup
                className="text-[14px] font-light uppercase
            "
              >
                2023
              </sup>
            </div>
          )}
          {section == 2 && (
            <div
              className={`text-[#ffffff] cursor-pointer font-semibold text-[1.5rem]`}
            >
              YAANAI <br />
              <sup className="text-[14px] font-light ml-1">2022</sup>
            </div>
          )}
          {section == 3 && (
            <div
              className={`text-[#ffffff] cursor-pointer font-semibold text-[1.5rem]`}
            >
              IMAIKKAA NODIGAL <br />
              <sup className="text-[14px] font-light ml-1">2018</sup>
            </div>
          )}
          {section === 4 && (
            <div
              className={`text-[#ffffff] cursor-pointer font-semibold text-[1.5rem]`}
            >
              TRISHA ILLANA NAYANTHARA <br />
              <sup className="text-[14px] font-light ml-1">2016</sup>
            </div>
          )}
        </div>
      </div>
      {/* right side arrow part */}
      <div className="absolute bottom-[15%] right-8 w-fit">
        <div className="flex items-end flex-col">
          <div className="text-white text-sm">{section}</div>
          <Image className="my-2" src={arrowBottom} alt="arrow" />
          <div className="text-white text-sm">
            {section === 4 ? "FILMS" : "4"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAllFilms;
