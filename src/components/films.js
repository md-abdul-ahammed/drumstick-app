import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import m1 from "/public/images/m1.png";
import m2 from "/public/images/m2.png";
import igloo from "/public/images/igloo.png";
import en from "/public/images/en.jpg";
import imaikkaa from "/public/images/imaikkaa.png";
import trisha from "/public/images/trisha.png";
import yaanai from "/public/images/yaanai.jpg";
import { useRouter } from "next/router";
import VideoPlayer from "@/components/modal/VideoPlayer";
import { scroller } from "react-scroll";

const Films = ({ navbar = false, setSection }) => {
  const [hoverImageNo, setHoverImageNo] = useState(null);
  const router = useRouter();
  const [showVideoPlayer, setShowVideoPlayer] = useState("");

  const handleMouseEnter = () => {
    scroller.scrollTo("films", {
      smooth: true,
      duration: 700,
    });

    router.push(`/#films`);
  };

  return (
    <div
      id="films"
      onMouseEnter={handleMouseEnter}
      className="bg-white overflow-hidden"
    >
      {navbar && <Navbar setSection={setSection} />}
      <div className="md:px-16 px-8 mt-6 mb-4 md:mb-12 2xl:mt-3">
        <div className="text-center font-extrabold pt-20 pb-8 text-2xl md:text-8xl">
          FILMS
        </div>
        {/* <div className="md:mt-8mt-4">
          <div className="font-semibold text-lg md:text-2xl mb-3">UPCOMING</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex h-fit flex-col">
              <div
                onMouseEnter={() => setHoverImageNo(2)}
                onMouseLeave={() => setHoverImageNo(null)}
                className="cursor-pointer relative"
              >
                <Image
                  src={m1}
                  alt="bg"
                  className=" w-full h-[280px] md:h-full object-cover"
                  height={400}
                  width={450}
                />
                {hoverImageNo === 2 && (
                  <div className="absolute hidden md:block top-0 left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            JUNE 2, 2023
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            M. Muthaiya
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            Arya, Siddhi Idnani, Prabhu, Aadukalam Naren,
                            Bhagyaraj, Singampuli
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=ZM5jZJIIVG4"
                              );
                            }}
                            className="text-white hover:underline  text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className=" mt-2">
                <div className=" text-[12px] md:text-[14px] text-left font-semibold">
                  KATHAR BASHA ENDRA <br />
                  MUTHURAMALINGAM{" "}
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="md:mt-8mt-4">
          <div className="font-semibold text-lg md:text-2xl mb-3">
            ALL FILMS
          </div>
          <div className="w-full columns-1 md:columns-3 gap-10">
            <div className="mb-5 overflow-hidden">
              <div
                onMouseEnter={() => setHoverImageNo(2)}
                onMouseLeave={() => setHoverImageNo(null)}
                onClick={() => router.push("/gallery/igloo")}
                className="relative cursor-pointer"
              >
                <Image
                  src={m2}
                  alt="Image 1"
                  className="w-full h-[280px] object-cover md:object-contain md:h-auto"
                />
                {hoverImageNo === 2 && (
                  <div className="absolute hidden md:block top-0 left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            JUNE 2, 2023
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            M. Muthaiya
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            Arya, Siddhi Idnani, Prabhu, Aadukalam Naren,
                            Bhagyaraj, Singampuli
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=ZM5jZJIIVG4"
                              );
                            }}
                            className="text-white hover:underline  text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-[12px] md:text-sm font-medium text-black text-extrabold">
                KATHAR BASHA ENDRA <br />
                MUTHURAMALINGAM{" "}
              </p>
            </div>
            <div className="mb-5 overflow-hidden">
              <div
                onMouseEnter={() => setHoverImageNo(1)}
                onMouseLeave={() => setHoverImageNo(null)}
                onClick={() => router.push("/gallery/igloo")}
                className="relative cursor-pointer"
              >
                <Image
                  src={m1}
                  alt="Image 1"
                  className="w-full h-[280px] object-cover md:object-contain md:h-auto"
                />
                {hoverImageNo === 1 && (
                  <div className="absolute hidden md:block top-0 left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            17 JULY 2019
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            Bharath Mohan
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            Anju Kurian, Amzath Khan, Bagavathi Perumal, Vinaya
                            Prasad
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=WI2Qbkm6XNA"
                              );
                            }}
                            className="text-white hover:underline   text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-[12px] md:text-sm line-clamp-1 font-medium text-black text-extrabold">
                IGLOO
              </p>
            </div>
            <div className="mb-5 overflow-hidden">
              <div
                onMouseEnter={() => setHoverImageNo(3)}
                onMouseLeave={() => setHoverImageNo(null)}
                onClick={() => router.push("/gallery/yaanai")}
                className="relative cursor-pointer"
              >
                <Image
                  src={yaanai}
                  alt="Image 2"
                  className="w-full h-[280px] object-cover md:object-contain md:h-auto"
                />

                {hoverImageNo === 3 && (
                  <div className="absolute hidden md:block top-0 left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            1 JULY 2022
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            HARI
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            WRITTEN BY
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            K.P. Jagan
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            ARUN VIJAY, PRIYA SHAVANI SHANKAR, SAMUTHIRAKANI,
                            RAADHIKA, SARATHKUAMR, AMMU ABHIRAMI, YOGI BABU
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=kwBT-YLgmOU"
                              );
                            }}
                            className="text-white hover:underline  text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-[12px] md:text-sm line-clamp-1 font-medium text-black text-extrabold">
                YAANAI
              </p>
            </div>
            <div className="mb-5 overflow-hidden">
              <div
                onMouseEnter={() => setHoverImageNo(4)}
                onMouseLeave={() => setHoverImageNo(null)}
                onClick={() => router.push("/gallery/en-aaloda-seruppa-kaanom")}
                className="relative cursor-pointer"
              >
                <Image
                  src={en}
                  alt="Image 3"
                  className="w-full h-[280px] object-cover md:object-contain md:h-auto"
                />
                {hoverImageNo === 4 && (
                  <div className="absolute top-0 hidden md:block left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            17 November 2017
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            K.P. Jagan
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            WRITTEN BY
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            K.P. Jagan
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            Thamizh, Anandhi,Yogi Babu, K.S Ravikumar, Rekha,
                            Bala Saravanan
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=4yqR6qmjz34"
                              );
                            }}
                            className="text-white hover:underline  text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-[12px] md:text-sm line-clamp-1 font-medium text-black text-extrabold">
                EN AALODA SERUPPA KAANOM
              </p>
            </div>
            <div className="mb-5 overflow-hidden">
              <div
                onMouseEnter={() => setHoverImageNo(6)}
                onMouseLeave={() => setHoverImageNo(null)}
                onClick={() => router.push("/gallery/trisha-illana-nayanthara")}
                className="relative cursor-pointer"
              >
                <Image
                  src={trisha}
                  alt="Image 4"
                  className="w-full h-[280px] object-cover md:object-contain md:h-auto"
                />
                {hoverImageNo === 6 && (
                  <div className="absolute top-0 hidden md:block left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            17 SEPTEMBER 2015
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            ADHIK RAVICHANDRAN
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            WRITTEN BY
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            ADHIK RAVICHANDRAN
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            G.V PRAKASH KUMAR, SIMRAN,VTV GANESH, ANANDHI,
                            MANISHA YADAV
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=LgGriiQ5u3w"
                              );
                            }}
                            className="text-white hover:underline   text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-[12px] md:text-sm line-clamp-1 font-medium text-black text-extrabold">
                TRISHA ILLANA NAYANTHARA
              </p>
            </div>

            <div className="mb-5 overflow-hidden">
              <div
                onMouseEnter={() => setHoverImageNo(5)}
                onMouseLeave={() => setHoverImageNo(null)}
                onClick={() => router.push("/gallery/imaikkaa-nodigal")}
                className="relative cursor-pointer"
              >
                <Image
                  src={imaikkaa}
                  alt="Image 4"
                  className="w-full h-[280px] object-cover md:object-contain md:h-auto"
                />
                {hoverImageNo === 5 && (
                  <div className="absolute top-0 hidden md:block left-0 w-full h-full bg-[#000000ab]">
                    <div className="flex w-[90%] items-end pb-4 mx-auto h-full">
                      <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            RELEASE DATE
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            30 AUGUST 2018
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            DIRECTED by
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            R.AJAY GNANAMUTHU,
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            WRITTEN BY
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            R.AJAY GNANAMUTHU, PATTUKOTTAI PRABAKAR(DIALOGUES)
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white  text-[12px] md:text-[14px]">
                            STARRING
                          </div>
                          <div className="text-white  text-[12px] md:text-[14px]">
                            NAYANTHARA, ATHARVAA,ANURAG KASHYAP, VIJAY
                            SETHUPATHI, RAASHI KHANNA
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideoPlayer(
                                "https://www.youtube.com/watch?v=Q0QoCgbwPjs"
                              );
                            }}
                            className="text-white hover:underline   text-[12px] md:text-[14px]"
                          >
                            WATCH TRAILER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-[12px] md:text-sm line-clamp-1 font-medium text-black text-extrabold">
                IMAIKKAA NODIGAL
              </p>
            </div>
          </div>
        </div>
      </div>
      {showVideoPlayer && (
        <VideoPlayer url={showVideoPlayer} closePlayer={setShowVideoPlayer} />
      )}
    </div>
  );
};

export default Films;
