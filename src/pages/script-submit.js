import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import scriptImg from "/public/images/script.png";
import Input from "@/components/Input";
import Select from "@/components/Select";
import circleIcon from "/public/images/Icon/circle.svg";
import activeCircleIcon from "/public/images/Icon/activeCircle.svg";
import FileUploader from "@/components/FileUploader";
import Head from "next/head";

const ScriptSubmit = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [experience, setExperience] = useState("");
  const [experienceInfo, setExperienceInfo] = useState("");
  const [genre, setGenre] = useState("");
  const [selectGenre, setSelectGenre] = useState("");
  const [title, setTitle] = useState("");
  const [selectOption, setSelectOption] = useState("Feature Film");

  const handleFileSelect = (files) => {
    setSelectedFiles(files);
  };

  return (
    <>
      <Head>
        <title>
        Submit Your Script
        </title>
        <meta
          name="description"
          content="We are going to take a unique apporach: aspiring writers and filmmakers can send us scripts and synopses directly. Visit this page for more."
        ></meta>
      </Head>
      <div className="bg-[#f4f4f4] h-full">
        <Navbar />
        <div className="flex md:px-16 px-8  items-center mt-6 2xl:mt-3 space-y-1 md:space-y-3 flex-col">
          <div className="text-[#1C5B83] text-[19px] md:text-[28px] font-medium">
            Stories, meet Drumsticks
          </div>
          <div className="text-[#1f2520cc] text-center text-[12px] md:text-base">
            use this portal to send us your stories, synopses, screenplays… it
            is your chance to wow us !
          </div>
        </div>
        <div className="md:px-16 px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-0 md:gap-10">
            <div className="md:block hidden col-span-2">
              <Image
                src={scriptImg}
                width={693}
                height={552}
                className="w-full"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-y-8 gap-y-4">
                <Input
                  label={"Enter your name"}
                  placeholder="Eg : John Doe"
                  type="text"
                  setValue={setName}
                />
                <Input
                  label={"Enter e-mail"}
                  placeholder="Eg : johndoe@mail.com"
                  type="email"
                  setValue={setEmail}
                />
                <Input
                  label={"Enter Contact number"}
                  placeholder="Eg : 9123456789"
                  type="number"
                  setValue={setNumber}
                />
                <Select
                  label={"Type of Submission"}
                  placeholder="eg : Synopses"
                  data={[
                    "Synopses",
                    "One-Liner",
                    "Treatment",
                    "Full Screenplay",
                  ]}
                  select={type}
                  setSelect={setType}
                />
                <Select
                  label={"Select Language"}
                  placeholder="eg : English , Tamil"
                  data={["English", "Tamil", "Malayalam", "Kannada"]}
                  select={language}
                  setSelect={setLanguage}
                />
                {selectGenre !== "Other" ? (
                  <Select
                    label={"Select Genre"}
                    placeholder="eg : Rom-Com, Action"
                    select={selectGenre}
                    setSelect={setSelectGenre}
                    data={[
                      "Comedy",
                      "Thriller",
                      "Drama",
                      "Action",
                      "Sci-Fi",
                      "Romantic",
                      "Other",
                    ]}
                  />
                ) : (
                  <Input
                    type="text"
                    placeholder="eg : Rom-Com, Action"
                    label={"Enter Genre"}
                    setValue={setGenre}
                  />
                )}
                <Select
                  label={"Experience"}
                  placeholder="eg : Fresher"
                  data={["Fresher", "Industry Experience"]}
                  select={experience}
                  setSelect={setExperience}
                />
                {experience === "Industry Experience" ? (
                  <div className="col-span-1 md:col-span-3">
                    <div className="flex flex-col">
                      <textarea
                        className={` w-full text-[#1F2520] shadow placeholder:text-[#1f25204d] shadow-[#0000000a] focus:ring-0 border-2 font-medium text-[12px] bg-[#ffffff1a] boder-[#1f252033] px-3 py-2 rounded-[10px] outline-none number-input`}
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Brief your industry experience here"
                        onChange={(e) => setExperienceInfo(e.target.value)}
                        maxLength={250}
                      ></textarea>
                      <div className="text-[12px] mt-1 text-[#333333ba]">
                        {experienceInfo ? experienceInfo.length : 0}/250
                        characters
                      </div>
                    </div>
                    <div className="col-span-3 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-8">
                        <div className="col-span-6">
                          <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
                            <div className="col-span-3">
                              <FileUploader onChange={handleFileSelect} />
                            </div>
                            <div className="flex col-span-2 justify-end flex-col"></div>
                          </div>
                        </div>
                        <div className="col-span-2"></div>
                      </div>
                    </div>
                    <div className="col-span-3 text-[#1c5b83cc] font-medium text-[14px] pl-2">
                      Note: If the text box is not sufficient or you have any
                      supporting documents as proof for your time working in the
                      film industry, use this button to upload
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="grid md:mt-8 mt-4 gap-x-6 grid-cols-1 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="Sample title"
                  label={"Enter the Title"}
                  setValue={setTitle}
                />
                <div className="grid items-end mt-2 md:mt-0 translate-y-[-10%] grid-cols-1">
                  <div className="flex space-x-10">
                    <div className="flex space-x-1 items-center">
                      <Image
                        width={13}
                        height={13}
                        onClick={() => setSelectOption("Feature Film")}
                        src={
                          selectOption === "Feature Film"
                            ? activeCircleIcon
                            : circleIcon
                        }
                        alt=""
                      />
                      <div className="text-[14px] text-[#1F2520]">
                        Feature Film
                      </div>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <Image
                        width={13}
                        height={13}
                        onClick={() => setSelectOption("Web Series")}
                        src={
                          selectOption === "Web Series"
                            ? activeCircleIcon
                            : circleIcon
                        }
                        alt=""
                      />
                      <div className="text-[14px] text-[#1F2520]">
                        Web Series
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:mt-8 mt-4 grid-cols-8">
                <div className="col-span-6">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
                    <div className="col-span-3">
                      <FileUploader onChange={handleFileSelect} />
                    </div>
                    <div className="flex col-span-2 justify-end flex-col">
                      <div className="flex font-medium items-center space-x-1">
                        <div className="w-1 h-1 rounded-full bg-[#1c5b83cc]"></div>
                        <div className="text-[#1c5b83cc] text-[12px]">
                          File format: PDF
                        </div>
                      </div>
                      <div className="flex font-medium items-center space-x-1">
                        <div className="w-1 h-1 rounded-full bg-[#1c5b83cc]"></div>
                        <div className="text-[#1c5b83cc] text-[12px]">
                          File size: Maximum 10MB
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2"></div>
              </div>
              <div className="md:mt-8 mt-4 flex justify-end mb-12">
                <button className="border-2 text-[#00916E] rounded-[10px] text-[14px] bg-[#00916e1a] border-[#00916e33] px-3 py-2 font-medium">
                  Submit Pitch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScriptSubmit;
