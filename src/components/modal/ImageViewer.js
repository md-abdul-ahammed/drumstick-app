import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const ImageViewer = ({ src = "", index, allImg, setShowModal }) => {
  const [srcImage, setSrcImage] = useState(src);
  const [clickArrow, setClickArrow] = useState(false);
  const [memorizeIndex, setMemorizeIndex] = useState(null);

  useEffect(() => {
    if (allImg.length <= memorizeIndex) {
      setSrcImage(allImg[0]);
      setMemorizeIndex(0);
      setClickArrow(true);
    }

    if (memorizeIndex < 0) {
      setSrcImage(allImg[allImg.length - 1]);
      setMemorizeIndex(allImg.length - 1);
      setClickArrow(true);
    }
  }, [allImg, memorizeIndex]);

  const handleNextImage = () => {
    if (!clickArrow) {
      setSrcImage(allImg[index + 1]);
      setMemorizeIndex(index + 1);
      setClickArrow(true);
    } else if (clickArrow) {
      setSrcImage(allImg[memorizeIndex + 1]);
      setMemorizeIndex((prev) => prev + 1);
    }
  };
  const handlePreviousImage = () => {
    if (!clickArrow) {
      setSrcImage(allImg[index - 1]);
      setMemorizeIndex(index - 1);
      setClickArrow(true);
    } else if (clickArrow) {
      setSrcImage(allImg[memorizeIndex - 1]);
      setMemorizeIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed z-[99] top-0 left-0 w-full h-screen bg-[#000000df]">
      <div className="w-[90%] md:w-[70%] relative m-auto h-full flex items-center justify-center">
        <Image
          src={srcImage}
          alt="My Image"
          width={1547}
          height={910}
          className="object-cover cursor-pointer  h-[80%] rounded-[10px] w-full"
          style={{ boxShadow: "0 0 50px -35px #fff" }}
        />
        <div className="absolute top-[5%] right-[-2%] md:right-[-8%]">
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => setShowModal(false)}
            icon={faXmark}
            size="2xl"
            color={"white"}
          />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] md:right-[-5%] right-[0%]">
          <FontAwesomeIcon
            className="cursor-pointer text-[3rem] text-black md:text-white md:text-[4rem]"
            onClick={handleNextImage}
            icon={faChevronRight}
          />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] md:left-[-5%] left-[0%]">
          <FontAwesomeIcon
            className="cursor-pointer text-[3rem] text-black md:text-white md:text-[4rem]"
            onClick={handlePreviousImage}
            icon={faChevronLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;

// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// const ImageViewer = ({ images = [], selectedImageIndex, setShowModal }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(selectedImageIndex);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowLeft") {
//         handlePreviousImage();
//       } else if (event.key === "ArrowRight") {
//         handleNextImage();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentImageIndex]);

//   const handleNextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(nextIndex);
//   };

//   const handlePreviousImage = () => {
//     const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(previousIndex);
//   };

//   const selectedImage = images[currentImageIndex];

//   return (
//     <div className="fixed z-[99] top-0 left-0 w-full h-screen bg-[#000000df]">
//       <div className="w-[70%] relative m-auto h-full flex items-center justify-center">
//         <Image
//           src={selectedImage}
//           alt="My Image"
//           width={1547}
//           height={910}
//           className="object-cover cursor-pointer h-[80%] rounded-[10px] w-full"
//           style={{ boxShadow: "0 0 50px -35px #fff" }}
//         />
//         <div className="absolute top-[5%] right-[-8%]">
//           <FontAwesomeIcon
//             className="cursor-pointer"
//             onClick={() => setShowModal(false)}
//             icon={faXmark}
//             size="2xl"
//             color={"white"}
//           />
//         </div>
//         <div className="absolute top-[50%] left-[2%] flex items-center">
//           <FontAwesomeIcon
//             className="cursor-pointer"
//             onClick={handlePreviousImage}
//             icon={faChevronLeft}
//             size="2x"
//             color={"white"}
//           />
//         </div>
//         <div className="absolute top-[50%] right-[2%] flex items-center">
//           <FontAwesomeIcon
//             className="cursor-pointer"
//             onClick={handleNextImage}
//             icon={faChevronRight}
//             size="2x"
//             color={"white"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageViewer;
