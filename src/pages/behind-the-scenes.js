/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import cameraImage from "/public/images/camera.png";
import Head from "next/head";

const BehindTheScenes = () => {
  return (
    <>
      <Head>
        <title>Behind The Scenes</title>
        <meta
          name="description"
          content="Drumsticks Productions (DP) is a versatile media and entertainment company based in Erode, India founded in 2016 by brothers S Sakthivel and S Vijayan."
        ></meta>
      </Head>
      <div className="bg-[#7bb0cf] py-4 h-auto 2xl:h-screen overflow-hidden w-full">
        <div className="h-[15%]">
          <Navbar isItHomePage />
        </div>
        <div className="h-[85%]">
          <div className="md:px-28 px-4 h-full">
            <div className="grid md:mt-8mt-4 h-full grid-cols-1 py-5 2xl:py-0 md:grid-cols-2">
              <div className="flex space-y-4 md:space-y-8 flex-col">
                <div className="flex space-y-2 md:space-y-4 flex-col">
                  <div className="md:text-[24px] text-[20px] 2xl:text-[42px] text-white">
                    Drumsticks Productions
                  </div>
                  <div className="md:pl-[7%] pl-0 text-white leading-relaxed font-light text-[16px] 2xl:text-[18px]">
                    Drumsticks Productions (DP) is a versatile media and
                    entertainment company based in Erode, India. The company was
                    founded in 2016 by brothers S Sakthivel and S Vijayan. DP
                    has a unique approach to project conception and execution,
                    which is reflected in their ability to deliver projects on
                    time and with flair. DP's office is located in Chennai,
                    Tamilnadu, India, where they specialize in film production
                    and other forms of entertainment. In addition, DP runs a
                    media college called "Clusters Institute of Media and
                    Technology" (CIMAT), located in Coimbatore, TN, India. CIMAT
                    brings together maestros of artistic genius to contribute to
                    DP's creative productions.
                  </div>
                </div>
                <div className="flex space-y-2 md:space-y-4 flex-col">
                  <div className="md:text-[24px] text-[20px] 2xl:text-[42px] text-white">
                    The Community-driven Approach
                  </div>
                  <div className="md:pl-[7%] pl-0 text-white leading-relaxed font-light text-[16px] 2xl:text-[18px]">
                    Drumsticks Productions (DP) is more than just a film
                    production company. DP is a community that supports and
                    augments the creative society. DP's founders, S Sakthivel
                    and S Vijayan, have infused their utopian minds into the
                    company's philosophy, creating a sensible approach to
                    project conception and execution. DP's emphasis on community
                    is further evidenced by their media college, "Clusters
                    Institute of Media and Technology" (CIMAT), where they train
                    the next generation of maestros in the arts. With its unique
                    style of conceiving and executing projects, DP has become a
                    leading force in the Indian media and entertainment
                    industry.
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Image src={cameraImage} alt="camera" className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BehindTheScenes;
