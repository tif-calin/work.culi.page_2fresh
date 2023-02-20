import StyledHead from "../components/StyledHead.tsx";
import AboutSection from "../components/home/sections/AboutSection.tsx";
import ProjectsSection from "../components/home/sections/ProjectsSection.tsx";
import ToolsSection from "../components/home/sections/ToolsSection.tsx";
import Socials from "../components/Socials.tsx";

const sectionContentClass = "p-4 mx-auto max-w-screen-md";

export default function Home() {
  return (
    <>
      <StyledHead>
        <title>Culi Tif — portfolio</title>
        <link rel="stylesheet" href="/style.css" />
      </StyledHead>
      <style>
        {`
          main section > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 6rem);
          }
        `}
      </style>
      <main class="flex-grow">
        <section>
          <div class={sectionContentClass}>
            <h1 class="font-serif text-7xl font-black">
              Hi<span class="text-red-500">,</span>{" "}
              I<span class="text-red-500">'</span>m
              Culi<span class="text-red-500">!</span>
            </h1>
            <p class="text-2xl">
              full-stack software engineer
            </p>
            <p class="my-10">
              <Socials />
            </p>
          </div>
        </section>
        <AboutSection contentClass={sectionContentClass} />
        <ProjectsSection contentClass={sectionContentClass} />
        <ToolsSection contentClass={sectionContentClass} />
      </main>
      <footer>
        <div
          class={`${sectionContentClass} flex flex-row flex-shrink flex-wrap gap-1 items-center justify-around`}
        >
          <span class="flex items-center gap-1 whitespace-nowrap">
            <span class="rotate-180 translate-y-[1.5px]">&copy;</span>
            <a href="https://github.com/tif-calin/work.culi.page_2fresh">
              steal this
            </a>
          </span>
          <span class="whitespace-nowrap">
            (re-)built with <a href="https://fresh.deno.dev/">fresh 🍋</a>
          </span>
          <Socials />
        </div>
      </footer>
    </>
  );
}
