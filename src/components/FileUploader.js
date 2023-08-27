import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import uploadIcon from "/public/images/Icon/upload.svg";

const FileUploader = ({ onChange, ...rest }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("Choose files to upload");
  const [error, setError] = useState("");

  const handleClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (!fileName) {
      setFileName("Choose files to upload");
    }
  }, [fileName]);

  const handleInputChange = (event) => {
    if (onChange) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        if (
          selectedFile.type === "application/pdf" &&
          selectedFile.size <= 10 * 1024 * 1024
        ) {
          setFileName(selectedFile.name);
          setError("");
          onChange([selectedFile]);
        } else {
          setFileName("Choose files to upload");
          onChange([]);
          setError("Please select a PDF file smaller than 10 MB.");
        }
      }
    }
  };

  return (
    <div className="custom-file-input-container relative">
      <div onClick={handleClick} className={`flex flex-col w-full`}>
        <label className="text-[#1F2520] text-[14px] mb-2">
          Choose files to upload
        </label>
        <div
          className={` w-full ${
            fileName === "Choose files to upload"
              ? "text-[#1f25204d]"
              : "text-[#000]"
          } relative shadow shadow-[#0000000a] border-2 font-medium text-[12px] bg-[#ffffff1a] boder-[#1f252033] px-3 py-2 rounded-[10px] outline-none`}
        >
          {fileName}
          <div className="absolute top-[50%] z-10 right-[10px] translate-y-[-50%]">
            <Image width={20} height={16} src={uploadIcon} alt="" />
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="application/pdf"
        ref={inputRef}
        onChange={handleInputChange}
        style={{ display: "none" }}
        {...rest}
      />
      {error && (
        <div className="text-[12px] absolute left-2 top-[103%] text-red-500 font-semibold">
          Please select a PDF file smaller than 10 MB.
        </div>
      )}
    </div>
  );
};

export default FileUploader;
