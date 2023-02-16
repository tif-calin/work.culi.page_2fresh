interface AboutSectionProps {
  contentClass?: string;
}

const AboutSection = ({ contentClass }: AboutSectionProps) => {
  return (
    <section class="bg-red-500 text-white">
      <div class={contentClass}>about about about</div>
    </section>
  );
};

export default AboutSection;
