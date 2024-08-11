import Socials from "./Socials.tsx";

const Footer = () => {
  return (
    <footer>
      <div
        class={`max-w-screen-md mx-auto p-4 flex flex-row flex-shrink flex-wrap gap-1 items-center justify-between rounded text-xl`}
        /* NOTE: `backdrop-blur` is currently broken in twind */
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
  );
};

export default Footer;
