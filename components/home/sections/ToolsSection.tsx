interface ToolsSectionProps {
  contentClass?: string;
}

const ToolsSection = ({ contentClass }: ToolsSectionProps) => {
  return (
    <section
      id="s-tools"
      class="
        before::absolute
        before::bg-red-500
        before::h-1/2
        before::origin-top-left
        before::rotate-[-2deg]
        before::top-[-2px]
        before::w-full
        before::z-[-1]
        bg-red-500 border-b-2 border-gray-900 border-t-2 overflow-x-clip relative text-white
      "
    >
      <style>
        {`
          #s-tools::before {
            content: '';
          }
        `}
      </style>
      <div class={"pt-8" + contentClass}>
        <h3 class="text-5xl mb-4">Tools</h3>
        <p>
          Like most of my fellow primates, I can use tools! Some of my front-end
          specialties include TypeScript, React, and data-visualization libraries
          and Ruby on Rails and Express.js for back-end frameworks. I usually
          reach for PostgreSQL as my database of choice, but have also been seen
          hanging out with breakfast club members like MongoDB and punks
          like <a class="underline" href="https://localfirstweb.dev/">local-first</a>.
        </p>
        <p class="mt-4">
          Nowdays I prefer to reach for Playwright for end-to-end testing and
          knock out front-end unit tests with Vitest.
        </p>
      </div>
    </section>
  );
};

export default ToolsSection;
