interface AboutSectionProps {
  contentClass?: string;
}

const AboutSection = ({ contentClass }: AboutSectionProps) => {
  return (
    <section class="bg-red-500 border-b-2 border-gray-900 relative text-white">
      <svg
        class="absolute translate-y-[-100%] w-[100%] h-16 top-1"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          class="fill-[var(--red-500)]"
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        />
        <path
          stroke="#111827"
          stroke-width="4"
          fill="none"
          d="
          M 1200 95.8 C 1132.19 118.92 1055.71 111.31 985.66 92.83 C 906.67 72 823.78 31 743.84 14.19 c -82.26 -17.34 -168.06 -16.33 -250.45 0.39 c -57.84 11.73 -114 31.07 -172 41.86 A 600.21 600.21 0 0 1 0 27.35
            "
        />
      </svg>
      <div class={"pt-0" + contentClass}>
        <h3 class="text-5xl mb-4">about about about</h3>
        <div class="flex flex-col gap-4">
          <p>
            I have a solid grasp of industry-standard tools and enjoy
            experimenting with up-and-coming technologies, but also have a deep
            appreciation for the web platform and contributing to a hand-made,
            accessible, and inclusive web.
          </p>
          <p>
            I'm a versatile learner with a background in mathematics and an
            experience developer who's worked across the whole stack. Some of my
            current interests include data visualizations with an eye for a11y,
            API development with an eye for optimization, and contributions to
            open- and crowd-sourced community projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
