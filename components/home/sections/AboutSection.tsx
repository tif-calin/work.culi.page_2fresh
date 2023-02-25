interface AboutSectionProps {
  contentClass?: string;
}

const AboutSection = ({ contentClass }: AboutSectionProps) => {
  return (
    <section class="bg-red-500 text-white">
      <div class={contentClass}>
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
