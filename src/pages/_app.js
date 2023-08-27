import Navigation from "@/components/Navigation";
import { SectionProvider } from "@/context/SectionContext";
import "@/styles/globals.css";
import { Unbounded } from "next/font/google";
import { useRouter } from "next/router";

const umbounded = Unbounded({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${umbounded.style.fontFamily};
          }
        `}
      </style>
      {(pathname === "/" ||
        pathname === "/team" ||
        pathname == "/films" ||
        pathname === "/invested") && <Navigation />}
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
    </>
  );
}
