import StyledHead from "../components/StyledHead.tsx";
import AboutSection from "../components/home/sections/AboutSection.tsx";
import ProjectsSection from "../components/home/sections/ProjectsSection/index.tsx";
import ToolsSection from "../components/home/sections/ToolsSection.tsx";
import Socials from "../components/Socials.tsx";
import Contact from "../components/home/Contact.tsx";
import Footer from "../components/Footer.tsx";

const sectionContentClass =
  " flex flex-col items-center justify-center max-w-screen-md mx-auto p-4";
const blockSectionClass = " min-h-[calc(90vh-4rem)] text-2xl p-16";

const sectionClass = sectionContentClass + blockSectionClass;

export default function Home() {
  return (
    <>
      <StyledHead>
        <title>Culi is a software engineer</title>
        <link rel="stylesheet" href="/style.css" />
      </StyledHead>
      <main class="flex-grow flex-nowrap">
        <section>
          <div
            class={"flex h-[calc(100vh-1rem)] max-w-screen-md mx-auto p-4 items-center justify-center" +
              blockSectionClass}
          >
            <div class="z-10">
              <h1 class="font-serif text-7xl font-black">
                Hi<span class="text-red-500">,</span>{" "}
                I<span class="text-red-500">'</span>m
                Culi<span class="text-red-500">!</span>
              </h1>
              <p>
                Software engineer
              </p>
              <p class="my-10">
                <Socials />
              </p>
            </div>
            <img
              src="/dentata.svg"
              alt="Dentata decorative graphic"
              class="animate-hero-graphic max-w-[65%] min-w-[35rem]"
            />
          </div>
        </section>
        <AboutSection contentClass={sectionClass} />
        <ProjectsSection contentClass={sectionClass} />
        <ToolsSection contentClass={sectionClass} />
        <Contact contentClass={sectionContentClass} />
      </main>
      <Footer />
      <svg
        class="fixed inset-0 pointer-events-none z-[-1]"
        transform="translateZ(0)"
        viewBox="0 0 100% 100%"
        height="100%"
        width="100%"
      >
        <filter id="grainy-texture">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
        <path
          filter="url(#grainy-texture)"
          opacity=".2"
          d="M0 0 h10000 v100000 H0 z"
          fill="#111827"
        />
      </svg>
    </>
  );
}
