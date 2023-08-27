import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SmoothScrollLink from "./SmoothLink";

const Navigation = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="fixed z-20 top-[50%] hidden md:block translate-y-[-50%] pl-8 pr-5 py-5 right-0">
      <div className="">
        <div className="flex space-y-6 flex-col">
          <div className="relative">
            <SmoothScrollLink to="home">
              <div
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  asPath === "/#home" || asPath === "/#invested"
                    ? "bg-white"
                    : "bg-[#1f252033]"
                }`}
              ></div>
            </SmoothScrollLink>
            {asPath === "/#home" && (
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <div
                  className={`h-6 w-6 cursor-pointer rounded-full bg-transparent border-[1.7px] ${
                    asPath === "/#home" || asPath === "/#invested"
                      ? "border-[#adacac61]"
                      : "border-[#1f25204d]"
                  }`}
                ></div>
              </div>
            )}
          </div>
          <div className="relative">
            <SmoothScrollLink to="films">
              <div
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  asPath === "/#home" || asPath === "/#invested"
                    ? "bg-white"
                    : "bg-[#1f252033]"
                }`}
              ></div>
            </SmoothScrollLink>
            {asPath === "/#films" && (
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <div
                  className={`h-6 w-6 cursor-pointer rounded-full bg-transparent border-[1.7px] ${
                    asPath === "/#home" || asPath === "/#invested"
                      ? "border-[#adacac61]"
                      : "border-[#1f25204d]"
                  }`}
                ></div>
              </div>
            )}
          </div>
          <div className="relative">
            <SmoothScrollLink to="team">
              <div
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  asPath === "/#home" || asPath === "/#invested"
                    ? "bg-white"
                    : "bg-[#1f252033]"
                }`}
              ></div>
            </SmoothScrollLink>
            {asPath === "/#team" && (
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <div
                  className={`h-6 w-6 cursor-pointer rounded-full bg-transparent border-[1.7px] ${
                    asPath === "/#home" || asPath === "/#invested"
                      ? "border-[#adacac61]"
                      : "border-[#1f25204d]"
                  }`}
                ></div>
              </div>
            )}
          </div>
          <div className="relative">
            <SmoothScrollLink to="invested">
              <div
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  asPath === "/#home" || asPath === "/#invested"
                    ? "bg-white"
                    : "bg-[#1f252033]"
                }`}
              ></div>
            </SmoothScrollLink>
            {asPath === "/#invested" && (
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <div
                  className={`h-6 w-6 cursor-pointer rounded-full bg-transparent border-[1.7px] ${
                    asPath === "/#home" || asPath === "/#invested"
                      ? "border-[#adacac61]"
                      : "border-[#1f25204d]"
                  }`}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
