interface ToolsSectionProps {
  contentClass?: string;
}

const ToolsSection = ({ contentClass }: ToolsSectionProps) => {
  return (
    <section class="bg-red-500 text-white">
      <div class={contentClass}>
        <h3 class="text-5xl mb-4">tool tool tool</h3>
        <div>
          Yes I can use tools. Primates are well-known for using tools. Some of
          my specialties include TypeScript, React, and D3 for building
          front-ends and Ruby on Rails and Express.js for back-end frameworks. I
          usually reach for PostgreSQL as my database of choice, but have also
          been seen hanging out with everyone from popular kids like MongoDB and
          Redis to the rebelious{" "}
          <a href="https://localfirstweb.dev/">local-first</a> subculture.
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
