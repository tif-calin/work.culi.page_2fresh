interface ProjectsSectionProps {
  contentClass?: string;
}

const ProjectsSection = ({ contentClass }: ProjectsSectionProps) => {
  return (
    <section>
      <div class={contentClass}>project project project</div>
    </section>
  );
};

export default ProjectsSection;
