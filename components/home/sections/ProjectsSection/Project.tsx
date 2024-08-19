interface ProjectProps {
  description: string;
  title: string;
}

const Project = ({ title, description }: ProjectProps) => {
  return (
    <div class="mb-4">
      <h4 class="text-3xl">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Project;
