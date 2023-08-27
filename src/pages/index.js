import AllFilms from "./Layouts/AllFilms";
import Films from "../components/films";
import Invested from "../components/invested";
import Team from "../components/team";
import MobileAllFilms from "@/components/MobileAllFilms";
import { useContext, useEffect, useState } from "react";
import { SectionContext } from "@/context/SectionContext";
import Head from "next/head";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { section, setSection } = useContext(SectionContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially to set the initial state
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Drumsticks Productions | Driven by creatives, united by cinema.
        </title>
        <meta
          name="description"
          content="Drumsticks Productions is more than just a film production company. It is a community that supports and augments the creative society."
        ></meta>
      </Head>
      {isMobile ? (
        <>
          {section < 5 ? (
            <MobileAllFilms section={section} setSection={setSection} />
          ) : (
            <>
              <Films setSection={setSection} navbar />
              <Team />
              <Invested setSection={setSection} />{" "}
            </>
          )}
        </>
      ) : (
        <>
          <AllFilms />
          <Films />
          <Team />
          <Invested />
        </>
      )}
    </>
  );
}
