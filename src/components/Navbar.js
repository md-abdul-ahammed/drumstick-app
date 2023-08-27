import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/public/images/logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo1 from "/public/images/logo1.png";
import logoMobileMenu from "/public/images/mobileMenuLogo.png";
import Link from "next/link";
import SmoothScrollLink from "./SmoothLink";
import { useRouter } from "next/router";
import { SectionContext } from "@/context/SectionContext";

const Navbar = ({ isItHomePage = null, isItMobileVersion = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const menuRef = useRef(null);
  const menuRefMobile = useRef(null);
  const router = useRouter();
  const { setSection } = useContext(SectionContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsOpenMobile(!isOpenMobile);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (
      menuRefMobile.current &&
      !menuRefMobile.current.contains(event.target)
    ) {
      setIsOpenMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleHomeRoute = () => {
    if (setSection) {
      setSection(1);
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className={`md:px-16 px-8 relative z-50 2xl:py-10 ${
        isItMobileVersion ? "bg-white py-5" : "pt-5"
      }`}
    >
      <div className="grid items-center md:items-start grid-cols-3">
        <div className="order-3 md:order-1">
          <Link
            href={"/#home"}
            className={`${
              isItHomePage ? "text-white" : "text-black"
            } hidden md:block`}
          >
            DRUMSTICKS PRODUCTIONS
          </Link>
          <div className="block md:hidden">
            <div className="relative flex justify-end" ref={menuRefMobile}>
              <button
                className=" text-white rounded-md"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  color={isItHomePage ? "white" : "black"}
                  className="text-3xl"
                />
              </button>
              {isOpenMobile && (
                <div className="fixed w-[70vw] h-[100vh] top-0 right-0 flex justify-center items-center">
                  <div className="relative bg-black w-full h-full">
                    <div className=" w-full  h-full right-[5%] absolute top-[5%]">
                      <div className="flex flex-col space-y-1 items-end w-full h-full">
                        <button
                          className=" text-white pr-2 mb-2 rounded-md"
                          onClick={toggleMobileMenu}
                        >
                          <FontAwesomeIcon
                            icon={faBars}
                            color={"white"}
                            className="text-2xl"
                          />
                        </button>
                        <div onClick={() => setIsOpen(false)}>
                          <SmoothScrollLink
                            className="w-full text-left "
                            to="films"
                          >
                            <button
                              onClick={() => {
                                setSection(5);
                                setIsOpenMobile(false);
                              }}
                              className=" text-white text-[14px] p-2 rounded-md mb-2 "
                            >
                              ALL FILMS
                            </button>
                          </SmoothScrollLink>
                        </div>
                        <div onClick={() => setIsOpen(false)}>
                          <SmoothScrollLink className="w-full " to="team">
                            <button
                              onClick={() => {
                                setSection(5);
                                setIsOpenMobile(false);
                              }}
                              className=" text-white text-[14px] p-2 rounded-md mb-2 "
                            >
                              OUR TEAM
                            </button>
                          </SmoothScrollLink>
                        </div>
                        <div onClick={() => setIsOpen(false)}>
                          <SmoothScrollLink to="invested">
                            <button
                              onClick={() => {
                                setSection(5);
                                setIsOpenMobile(false);
                              }}
                              className=" text-white text-[14px] p-2 rounded-md mb-2 "
                            >
                              OUR INVESTMENTS
                            </button>
                          </SmoothScrollLink>
                        </div>
                        <Link href="/behind-the-scenes">
                          <button className=" text-white text-[14px] p-2 rounded-md mb-2 ">
                            BEHIND THE SCENES
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="w-full px-4 absolute bottom-[3%]">
                      <Image
                        alt="logo mobile"
                        height={263}
                        width={188}
                        src={logoMobileMenu}
                        className="w-full h-[200px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex order-2 justify-center">
          <Image
            src={logo}
            alt="bg"
            onClick={handleHomeRoute}
            className="h-[65px] w-[90px]"
            height={65}
            width={100}
          />
        </div>
        <div className="flex order-1 md:order-3 justify-between space-x-3">
          <div className="flex space-x-3 items-start ml-0 md:ml-auto mr-10">
            <Image
              alt="bg2"
              height={25}
              width={25}
              onClick={() => router.push("/script-submit")}
              src={logo1}
              className="translate-y-[3px] h-[30px] w-[30px] md:h-[18px] md:w-[18px]"
              style={{ filter: isItHomePage ? "none" : "invert(1)" }}
            />
            <Link
              href={"/script-submit"}
              className={`uppercase ${
                isItHomePage ? "text-white" : "text-black"
              } hidden md:block`}
            >
              Submit Your Script
            </Link>
          </div>
          <div className="relative hidden md:block" ref={menuRef}>
            <button className=" text-white rounded-md" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={faBars}
                color={isItHomePage ? "white" : "black"}
              />
            </button>
            {isOpen && (
              <div className="absolute top-10 right-0 flex justify-center items-center">
                <div className="bg-[#060606e3] w-64 h-fit py-3 rounded-md flex flex-col justify-center items-center text-left">
                  <div className="w-full" onClick={() => setIsOpen(false)}>
                    <SmoothScrollLink
                      className="w-full text-left px-2"
                      to="films"
                    >
                      <button className=" text-white text-[14px] p-2 rounded-md mb-2 ">
                        ALL FILMS
                      </button>
                    </SmoothScrollLink>
                  </div>
                  <div className="w-full" onClick={() => setIsOpen(false)}>
                    <SmoothScrollLink className="w-full px-2" to="team">
                      <button className=" text-white text-[14px] p-2 rounded-md mb-2 ">
                        OUR TEAM
                      </button>
                    </SmoothScrollLink>
                  </div>
                  <div className="w-full" onClick={() => setIsOpen(false)}>
                    <SmoothScrollLink className="w-full px-2" to="invested">
                      <button className=" text-white text-[14px] p-2 rounded-md mb-2 ">
                        OUR INVESTMENTS
                      </button>
                    </SmoothScrollLink>
                  </div>
                  <Link className="w-full px-2" href="/behind-the-scenes">
                    <button className=" text-white text-[14px] p-2 rounded-md mb-2 ">
                      BEHIND THE SCENES
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
