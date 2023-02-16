import StyledHead from "../components/StyledHead.tsx";

const sectionContentClass = "p-4 mx-auto max-w-screen-md";

export default function Home() {
  return (
    <>
      <StyledHead>
        <title>Culi Tif — portfolio</title>
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
              email, linkedin, github
            </p>
          </div>
        </section>
      </main>
      <footer class="p-4 mx-auto max-w-screen-md flex-shrink flex gap-1 items-center">
        <span class="rotate-180 translate-y-[1.5px]">&copy;</span>
        <span>
          <a href="https://github.com/tif-calin/work.culi.page_2fresh">
            steal this
          </a>
        </span>
      </footer>
    </>
  );
}
