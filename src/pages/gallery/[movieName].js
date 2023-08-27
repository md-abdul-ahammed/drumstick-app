import Navbar from "@/components/Navbar";
import ImageViewer from "@/components/modal/ImageViewer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

//mobile version banner image
import igMobile from "/public/images/igloo/iglooMobileBanner.png";
import yaanaiMobile from "/public/images/yaanai/DSC02310 1-min.png";
import enMobile from "/public/images/en/enMobile.png";
import tMobile from "/public/images/trisha/trishaMobile.png";
import imMobile from "/public/images/imaikkaa/imaikkaa.png";

//igloo
import ig1 from "/public/images/ig1.png";
import ig2 from "/public/images/ig2.png";
import ig3 from "/public/images/ig3.png";
import ig4 from "/public/images/ig4.png";
import ig5 from "/public/images/ig5.png";
import ig6 from "/public/images/ig6.png";
import ig7 from "/public/images/ig7.jpg";
import ig8 from "/public/images/ig8.jpg";
import ig9 from "/public/images/ig9.jpg";
import ig10 from "/public/images/ig10.jpg";
import ig11 from "/public/images/ig11.jpg";
import ig12 from "/public/images/ig12.jpg";
import ignews1 from "/public/images/ignews1.jpg";
import ignews2 from "/public/images/ignews2.jpg";
import ignews3 from "/public/images/ignews3.jpg";
import ignews4 from "/public/images/ignews4.jpg";
import shareIcon from "/public/images/share.svg";
import back from "/public/images/back.svg";

//yaanai
import yaanai1 from "/public/images/yaanai-g1.png";
import yaanai2 from "/public/images/yaanai-g2.png";
import yaanai3 from "/public/images/yaanai-g3.png";
import yaanai4 from "/public/images/yaanai-g4.png";
import yaanai5 from "/public/images/yaanai-g5.png";
import yaanai6 from "/public/images/yaanai6.jpg";
import yaanai7 from "/public/images/yaanai7.jpg";
import yaanai8 from "/public/images/yaanai8.jpg";
import yaanai9 from "/public/images/yaanai9.jpg";
import yaanai10 from "/public/images/yaanai10.jpg";
import yaanai11 from "/public/images/yaanai11.jpg";
import yaanai12 from "/public/images/yaanai12.jpg";
import ynews1 from "/public/images/ynews1.jpg";
import ynews2 from "/public/images/ynews2.jpg";
import ynews3 from "/public/images/ynews3.jpg";
import ynews4 from "/public/images/ynews4.jpg";
import ynews5 from "/public/images/ynews5.jpg";
import ynews6 from "/public/images/ynews6.jpg";

//EN AALODA SERUPPA KAANOM
import en1 from "/public/images/en1.jpg";
import en2 from "/public/images/en2.jpg";
import en3 from "/public/images/en3.jpg";
import en4 from "/public/images/en4.jpg";
import en5 from "/public/images/en5.jpg";
import en6 from "/public/images/en6.jpg";
import en7 from "/public/images/en7.jpg";
import en8 from "/public/images/en8.jpg";
import en9 from "/public/images/en9.jpg";
import en10 from "/public/images/en10.jpg";
import en11 from "/public/images/en11.jpg";
import en12 from "/public/images/en12.jpg";
import enews1 from "/public/images/enews1.jpg";
import enews2 from "/public/images/enews2.jpg";

//TRISHA ILLANA NAYANTHARA
import t1 from "/public/images/t1.jpg";
import t2 from "/public/images/t2.jpg";
import t3 from "/public/images/t3.jpg";
import t4 from "/public/images/t4.jpg";
import t5 from "/public/images/t5.jpg";
import t6 from "/public/images/t6.jpg";
import t7 from "/public/images/t7.jpg";
import t8 from "/public/images/t8.jpg";
import t9 from "/public/images/t9.jpg";
import t10 from "/public/images/t10.jpg";
import t11 from "/public/images/t11.jpg";
import t12 from "/public/images/t12.jpg";
import tnews1 from "/public/images/tnews1.jpg";
import tnews2 from "/public/images/tnews2.jpg";
import tnews3 from "/public/images/tnews3.jpg";
import tnews4 from "/public/images/tnews4.jpg";
import tnews5 from "/public/images/tnews5.jpg";

//IMAIKKAA NOIDIGAL
import im1 from "/public/images/im1.jpg";
import im2 from "/public/images/im2.jpg";
import im3 from "/public/images/im3.jpg";
import im4 from "/public/images/im4.jpg";
import im5 from "/public/images/im5.jpg";
import im6 from "/public/images/im6.jpg";
import im7 from "/public/images/im7.jpg";
import im8 from "/public/images/im8.jpg";
import im9 from "/public/images/im9.jpg";
import im10 from "/public/images/im10.jpg";
import im11 from "/public/images/im11.jpg";

import imnews1 from "/public/images/imnews1.jpg";
import imnews2 from "/public/images/imnews2.jpg";
import imnews3 from "/public/images/imnews3.jpg";
import imnews4 from "/public/images/imnews4.jpg";
import imnews5 from "/public/images/imnews5.jpg";
import imnews6 from "/public/images/imnews6.jpg";
import { replaceHyphensWithSpaces } from "@/utils/utils";
import VideoPlayer from "@/components/modal/VideoPlayer";
import { SectionContext } from "@/context/SectionContext";

// mobile version galary data
const igloMobileData = {
  src: igMobile,
  releaseDate: "17 JULY 2019",
  directedBy: "Bharath Mohan",
  starring: "Anju Kurian, Amzath Khan, Bagavathi Perumal, Vinaya Prasad",
  trailerUrl: "https://www.youtube.com/watch?v=WI2Qbkm6XNA",
};
const enMobileData = {
  src: enMobile,
  releaseDate: "17 November 2017",
  directedBy: "Bharath Mohan",
  writtenBy: "K.P. Jagan",
  starring: "Thamizh, Anandhi,Yogi Babu, K.S Ravikumar, Rekha, Bala Saravanan",
  trailerUrl: "https://www.youtube.com/watch?v=4yqR6qmjz34",
};
const imaikkaaMobileData = {
  src: imMobile,
  releaseDate: "30 AUGUST 2018",
  directedBy: "R.AJAY GNANAMUTHU",
  writtenBy: "R.AJAY GNANAMUTHU, PATTUKOTTAI PRABAKAR(DIALOGUES)",
  starring:
    "NAYANTHARA, ATHARVAA,ANURAG KASHYAP, VIJAY SETHUPATHI, RAASHI KHANNA",
  trailerUrl: "https://www.youtube.com/watch?v=Q0QoCgbwPjs",
};
const yaanaiMobileData = {
  src: yaanaiMobile,
  releaseDate: "1 JULY 2022",
  directedBy: "HARI",
  writtenBy: "K.P. Jagan",
  starring:
    "ARUN VIJAY, PRIYA SHAVANI SHANKAR, SAMUTHIRAKANI, RAADHIKA, SARATHKUAMR, AMMU ABHIRAMI, YOGI BABU",
  trailerUrl: "https://www.youtube.com/watch?v=kwBT-YLgmOU",
};
const trishaMobileData = {
  src: tMobile,
  releaseDate: "17 SEPTEMBER 2015",
  directedBy: "ADHIK RAVICHANDRAN",
  writtenBy: "ADHIK RAVICHANDRAN",
  starring: "G.V PRAKASH KUMAR, SIMRAN,VTV GANESH, ANANDHI, MANISHA YADAV",
  trailerUrl: "https://www.youtube.com/watch?v=LgGriiQ5u3w",
};

const igloo = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9, ig10, ig11, ig12];
const yaanai = [
  yaanai1,
  yaanai2,
  yaanai3,
  yaanai4,
  yaanai5,
  yaanai6,
  yaanai7,
  yaanai8,
  yaanai9,
  yaanai10,
  yaanai11,
  yaanai12,
];

const enaalodaseruppukaanom = [
  en1,
  en2,
  en3,
  en4,
  en5,
  en6,
  en7,
  en8,
  en9,
  en10,
  en11,
  en12,
];
const trishaillananayanthara = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
];
const imaikkaanodigal = [
  im1,
  im2,
  im3,
  im4,
  im5,
  im6,
  im7,
  im8,
  im9,
  im10,
  im11,
];

const ignoNewsData = [
  {
    imageSrc: ignews1,
    content: "Igloo review by - New Indian Express ",
    link: "https://www.newindianexpress.com/entertainment/review/2019/jul/19/igloo-movie-review-a-heart-warming-love-story-2006468.html",
  },
  {
    imageSrc: ignews2,
    content: "Igloo review by - Zee5 ",
    link: "https://www.zee5.com/zee5news/igloo-review-shiva-and-ramyas-passionate-tale-will-restore-your-faith-in-love",
  },
  {
    imageSrc: ignews3,
    content: "Igloo review by - Letterboxd ",
    link: "https://letterboxd.com/film/igloo-2019/",
  },
  {
    imageSrc: ignews4,
    content: "Igloo review by - Binged ",
    link: "https://www.binged.com/reviews/igloo-zee5-review/",
  },
];

const yaanaiNewsData = [
  {
    imageSrc: ynews1,
    content: "Yaanai review by - Cinema Express ",
    link: "https://www.cinemaexpress.com/tamil/review/2022/jul/01/yaanai-movie-reviewa-gripping-anti-casteist-film-with-good-old-masala-32471.html",
  },
  {
    imageSrc: ynews2,
    content: "Yaanai review by - PinkVilla ",
    link: "https://www.pinkvilla.com/entertainment/south/yaanai-movie-review-arun-vijay-shines-screen-perfect-mass-entertainer-watch-weekend-1154332",
  },
  {
    imageSrc: ynews3,
    content: "Yaanai review by - Times Of India ",
    link: "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/yaanai/movie-review/92590158.cms",
  },
  {
    imageSrc: ynews4,
    content: "Yaanai review by - First Post",
    link: "https://www.firstpost.com/entertainment/yaanai-movie-review-an-action-drama-that-does-what-it-sets-out-to-do-10861441.html",
  },
  {
    imageSrc: ynews5,
    content: "Yaanai review by - Film Companion ",
    link: "https://www.filmcompanion.in/reviews/yaanai-movie-review-arun-vijay-is-in-full-form-in-haris-melodramatic-action-romp",
  },
  {
    imageSrc: ynews6,
    content: "Yaanai review by - India Herald ",
    link: "https://www.indiaherald.com/Breaking/Read/994514216/Yaanai-Movie-Review-An-Emotional-Family-Ride-with-Racy-Action-episodes",
  },
];
const enNewsData = [
  {
    imageSrc: enews1,
    content: "EN AALODA SERUPPA KAANOM movie review by- Times Of India",
    link: "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/en-aaloda-seruppa-kaanom/movie-review/61682387.cms",
  },
  {
    imageSrc: enews2,
    content: "EN AALODA SERUPPA KAANOM movie review by - New Indian Express",
    link: "https://www.newindianexpress.com/entertainment/review/2017/nov/17/en-aaloda-seruppa-kaanom-review-the-most-bizarre-romance-of-this-year-1703940.html",
  },
];
const imnewsData = [
  {
    imageSrc: imnews1,
    content: "IMAIKKAA NODIGAL review by - Hindustan Times",
    link: "https://www.hindustantimes.com/regional-movies/imaikkaa-nodigal-movie-review-anurag-kash[…]-nayanthara-s-cop-drama/story-K40iJkpazpyvveQo0lAgKK.html",
  },
  {
    imageSrc: imnews2,
    content: "IMAIKKAA NODIGAL review by  - Behind Woods",
    link: "https://www.behindwoods.com/tamil-movies/imaikkaa-nodigal/imaikkaa-nodigal-review.html",
  },
  {
    imageSrc: imnews3,
    content: "IMAIKKAA NODIGAL review by  - The News Minute",
    link: "https://www.thenewsminute.com/article/imaikkaa-nodigal-review-nayanthara-anurag-kashyap-are-great-script-lacking-87573",
  },
  {
    imageSrc: imnews4,
    content: "IMAIKKAA NODIGAL review by  - Indian Express",
    link: "https://indianexpress.com/article/entertainment/movie-review/imaikkaa-nodigal-movie-review-anurag-kashyap-nayanthara-atharvaa-5334266/",
  },
  {
    imageSrc: imnews6,
    content: "IMAIKKAA NODIGAL review by  - First Post",
    link: "https://www.firstpost.com/entertainment/imaikka-nodigal-movie-review-anurag-kashyap-n[…]e-in-well-written-if-not-well-executed-thriller-5083951.html",
  },
  {
    imageSrc: imnews5,
    content: "IMAIKKAA NODIGAL review by  - Times Of India",
    link: "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/imaikkaa-nodigal/movie-review/65606123.cms",
  },
];
const tnewsData = [
  {
    imageSrc: tnews1,
    content: "TRISHA ILLANA NAYANTHARA review by - Times Of India",
    link: "https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/trisha-illana-nayanthara/movie-review/49021609.cms",
  },
  {
    imageSrc: tnews2,
    content: "TRISHA ILLANA NAYANTHARA review by - The Hindu",
    link: "https://www.thehindu.com/features/cinema/cinema-reviews/trisha-illana-nayanthara-an-o[…]-sex-comedy-where-the-joke-is-on-the-hero/article7662497.ece",
  },
  {
    imageSrc: tnews3,
    content: "TRISHA ILLANA NAYANTHARA review by - Pradeepk Web",
    link: "https://pradeepkweb.wordpress.com/2015/09/17/trisha-illana-nayanthara-terrifically-adulterated/",
  },
  {
    imageSrc: tnews4,
    content: "TRISHA ILLANA NAYANTHARA review by- Gulf News",
    link: "https://gulfnews.com/entertainment/south-indian/review-trisha-illana-nayanthara-1.1588659",
  },
  {
    imageSrc: tnews5,
    content: "TRISHA ILLANA NAYANTHARA review by- New Indian Express",
    link: "https://www.newindianexpress.com/entertainment/tamil/2015/sep/20/Trisha-Illana-Nayanthara[…]es-of-Age-in-His-Debut-Flick-with-Bold-Takes-817447.html",
  },
];

const MovieGallery = () => {
  const {
    query: { movieName },
  } = useRouter();

  const [movieGallery, setMovieGalley] = useState([]);
  const [selectBtn, setSelectBtn] = useState("gallery");
  const [selectBtnMobile, setSelectBtnMobile] = useState("");
  const [selectImage, setSelectImagae] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [mobileData, setMobileData] = useState({});
  const [showTrailer, setShowTrailer] = useState("");
  const { setSection } = useContext(SectionContext);

  useEffect(() => {
    if (movieName === "igloo") {
      setMovieGalley(igloo);
      setNewsData(ignoNewsData);
      setMobileData(igloMobileData);
    } else if (movieName === "yaanai") {
      setMovieGalley(yaanai);
      setNewsData(yaanaiNewsData);
      setMobileData(yaanaiMobileData);
    } else if (movieName === "en-aaloda-seruppa-kaanom") {
      setMovieGalley(enaalodaseruppukaanom);
      setNewsData(enNewsData);
      setMobileData(enMobileData);
    } else if (movieName === "trisha-illana-nayanthara") {
      setMovieGalley(trishaillananayanthara);
      setNewsData(tnewsData);
      setMobileData(trishaMobileData);
    } else if (movieName === "imaikkaa-nodigal") {
      setMovieGalley(imaikkaanodigal);
      setNewsData(imnewsData);
      setMobileData(imaikkaaMobileData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieName]);

  return (
    <div className="bg-[#f4f4f4] w-full h-auto md:h-screen">
      <Navbar />

      {/* ============this is for destop version (start)============= */}
      <div className="relative hidden md:block px-16 mt-6 2xl:mt-3">
        {/* ==============desktop version start============== */}
        <div className="flex items-center space-x-3">
          <div className="w-[13px] bg-[#0157BD] h-[30px]"></div>
          <div className="uppercase">{replaceHyphensWithSpaces(movieName)}</div>
          <div className="flex absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] space-x-12">
            <button
              onClick={() => setSelectBtn("gallery")}
              className={`px-4 text-[14px] pb-1 ${
                selectBtn === "gallery" &&
                "border-b-2 duration-100 border-[#1F2520]"
              }`}
            >
              GALLERY
            </button>
            <button
              onClick={() => setSelectBtn("news")}
              className={`px-4 text-[14px] pb-1 ${
                selectBtn === "news" &&
                "border-b-2 duration-100 border-[#1F2520]"
              }`}
            >
              NEWS
            </button>
          </div>
        </div>
      </div>
      {/* ============this is for destop version (end)============= */}
      {/* ============this is for mobile version (start)============= */}
      <div className="block px-4 md:hidden">
        <div className="text-center font-extrabold py-3 text-2xl">FILMS</div>
        <div className="flex flex-col space-y-4">
          <Link
            href={"/#films"}
            onClick={() => setSection(5)}
            className="flex items-center space-x-3"
          >
            <Image
              className="stroke-black"
              src={back}
              alt="back"
              width={25}
              height={10}
            />
            <span className="text-[12px]">BACK </span>
          </Link>
          <div className="uppercase text-sm font-bold">
            {replaceHyphensWithSpaces(movieName)}
          </div>
          <Image
            width={392}
            height={611}
            src={mobileData.src}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="flex flex-col space-y-2">
            <span className="text-[12px] font-medium text-gray-400">
              RELEASE DATE
            </span>
            <div>{mobileData.releaseDate}</div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-[12px] font-medium text-gray-400">
              DIRECTED by
            </span>
            <div>{mobileData.directedBy}</div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          {mobileData.writtenBy && (
            <div className="flex flex-col space-y-2">
              <span className="text-[12px] font-medium text-gray-400">
                WRITTEN BY
              </span>
              <div>{mobileData.writtenBy}</div>
              <div className="w-full h-[1px] bg-gray-400"></div>
            </div>
          )}
          <div className="flex flex-col space-y-2">
            <span className="text-[12px] font-medium text-gray-400">
              STARRING
            </span>
            <div>{mobileData.starring}</div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-center">
              <button
                onClick={() => setShowTrailer(mobileData.trailerUrl)}
                className="px-4 mb-2 py-2 text-white text-xs bg-[#333333] rounded-md"
              >
                WATCH TRAILER
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex justify-center">
            <div className="flex space-x-6">
              <button
                onClick={() =>
                  setSelectBtnMobile(
                    selectBtnMobile === "gallery" ? "" : "gallery"
                  )
                }
                className="px-4 mb-2 py-2 border-2 text-xs border-[#1c5c835d] text-[#1C5B83] rounded-md"
              >
                Gallery{" "}
                {selectBtnMobile !== "gallery" ? (
                  <span className="ml-2">&#65291;</span>
                ) : (
                  <span className="ml-2">&#8722;</span>
                )}
              </button>
              <button
                onClick={() =>
                  setSelectBtnMobile(selectBtnMobile === "news" ? "" : "news")
                }
                className="px-4 mb-2 py-2 border-2 text-xs border-[#1c5c835d] text-[#1C5B83] rounded-md"
              >
                Articles{" "}
                {selectBtnMobile !== "news" ? (
                  <span className="ml-2">&#65291;</span>
                ) : (
                  <span className="ml-2">&#8722;</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ============this is for mobile version (end)============= */}
      {/* ============this is for desktop version (start)============= */}
      <div className="md:px-48 hidden md:block px-4 pb-8 md:pt-0 h-auto md:h-[65%] overflow-visible md:overflow-y-scroll mt-10">
        {selectBtn === "news" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-6">
            {newsData.map((data, index) => (
              <div key={index} className="h-fit">
                <Image
                  src={data.imageSrc}
                  alt="My Image"
                  width={375}
                  height={155}
                  className="object-cover h-[180px] md:h-[290px]  rounded-[10px] w-full"
                />

                <div className="flex space-x-3 p-2 items-center">
                  <Link
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-[14px] text-[14px] underline cursor-pointer"
                  >
                    {data.content}
                  </Link>
                  <Image
                    src={shareIcon}
                    alt="share"
                    className="cursor-pointer"
                    width={23}
                    height={18}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {selectBtn === "gallery" && (
          <>
            {movieGallery.length === 0 ? (
              <div className="text-center text-xl font-medium h-full flex justify-center items-center w-full">
                No images are available at this moment
              </div>
            ) : (
              <div className="grid pb-3 grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-8">
                {movieGallery.map((movieImg, i) => (
                  <Image
                    key={i}
                    onClick={() => {
                      setShowModal(!showModal);
                      setSelectImagae({ imgScr: movieImg, index: i });
                    }}
                    src={movieImg}
                    alt={"My Image " + i + 1}
                    width={800}
                    height={500}
                    className="object-cover cursor-pointer h-[180px] md:h-[290px] rounded-[10px]"
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      {/* ============this is for desktop version (end)============= */}
      <div className="md:px-48 block md:hidden px-4 pb-8 md:pt-0 h-auto md:h-[65%] overflow-visible md:overflow-y-scroll mt-10">
        {selectBtnMobile === "news" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-6">
            {newsData.map((data, index) => (
              <div key={index} className="h-fit">
                <Image
                  src={data.imageSrc}
                  alt="My Image"
                  width={375}
                  height={155}
                  className="object-cover h-[180px] md:h-[290px]  rounded-[10px] w-full"
                />

                <div className="flex space-x-3 p-2 items-center">
                  <Link
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-[14px] text-[14px] underline cursor-pointer"
                  >
                    {data.content}
                  </Link>
                  <Image
                    src={shareIcon}
                    alt="share"
                    className="cursor-pointer"
                    width={23}
                    height={18}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {selectBtnMobile === "gallery" && (
          <>
            {movieGallery.length === 0 ? (
              <div className="text-center text-xl font-medium h-full flex justify-center items-center w-full">
                No images are available at this moment
              </div>
            ) : (
              <div className="grid pb-3 grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-8">
                {movieGallery.map((movieImg, i) => (
                  <Image
                    key={i}
                    onClick={() => {
                      setShowModal(!showModal);
                      setSelectImagae({ imgScr: movieImg, index: i });
                    }}
                    src={movieImg}
                    alt={"My Image " + i + 1}
                    width={800}
                    height={500}
                    className="object-cover cursor-pointer h-[180px] md:h-[290px] rounded-[10px]"
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      {showTrailer && (
        <VideoPlayer url={showTrailer} closePlayer={setShowTrailer} />
      )}
      {showModal && (
        <ImageViewer
          src={selectImage.imgScr}
          index={selectImage.index}
          allImg={movieGallery}
          setShowModal={setShowModal}
        />
      )}
      <div className="fixed md:block hidden right-[30px] bottom-[20px]">
        <Link href={"/#films"} className="flex items-center space-x-3">
          <Image
            className="stroke-black"
            src={back}
            alt="back"
            width={31}
            height={12}
          />
          <div className="">BACK </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieGallery;
