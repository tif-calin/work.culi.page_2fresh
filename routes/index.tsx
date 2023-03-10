import StyledHead from "../components/StyledHead.tsx";
import AboutSection from "../components/home/sections/AboutSection.tsx";
import ProjectsSection from "../components/home/sections/ProjectsSection.tsx";
import ToolsSection from "../components/home/sections/ToolsSection.tsx";
import Socials from "../components/Socials.tsx";
import Contact from "../components/home/Contact.tsx";

const sectionContentClass =
  " flex flex-col items-center justify-center max-w-screen-md mx-auto p-4";
const blockSectionClass = " min-h-[calc(90vh-4rem)] text-2xl p-16";

const sectionClass = sectionContentClass + blockSectionClass;

export default function Home() {
  return (
    <>
      <StyledHead>
        <title>Culi Tif — portfolio</title>
        <link rel="stylesheet" href="/style.css" />
      </StyledHead>
      <main class="flex-grow">
        <section>
          <div class={"h-[calc(100vh-1rem)]" + sectionClass}>
            <h1 class="font-serif text-7xl font-black">
              Hi<span class="text-red-500">,</span>{" "}
              I<span class="text-red-500">'</span>m
              Culi<span class="text-red-500">!</span>
            </h1>
            <p>
              full-stack software engineer
            </p>
            <p class="my-10">
              <Socials />
            </p>
          </div>
        </section>
        <AboutSection contentClass={sectionClass} />
        <ProjectsSection contentClass={sectionClass} />
        <ToolsSection contentClass={sectionClass} />
        <Contact contentClass={sectionContentClass} />
      </main>
      <footer>
        <div
          class={`${sectionContentClass} flex flex-row flex-shrink flex-wrap gap-1 items-center justify-between rounded text-xl`}
          /* NOTE: `backdrop-blur` is currently broken in tw */
          style="backdrop-filter: blur(8px);"
        >
          <span class="flex flex-grow items-center gap-1 text-left w-[33%] whitespace-nowrap">
            <span class="rotate-180 translate-y-[1.5px]">&copy;</span>
            <a href="https://github.com/tif-calin/work.culi.page_2fresh">
              steal this
            </a>
          </span>
          <Socials />
          <span class="text-right w-[33%] whitespace-nowrap flex-grow">
            <span>
              (re-)built with <a href="https://fresh.deno.dev/">fresh 🍋</a>
            </span>
          </span>
        </div>
      </footer>
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
