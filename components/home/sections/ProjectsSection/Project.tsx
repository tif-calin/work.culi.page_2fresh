interface ProjectProps {
  description: string;
  githubRepo: string | null;
  title: string;
  webUrl: string;
}

const Project = ({ title, description, githubRepo, webUrl }: ProjectProps) => {
  const anchorId = `${title.toLocaleLowerCase().replace(/\s/g, "-")}`;

  return (
    <div class="mb-4">
      <div class="flex flex-row justify-between">
        <h4 id={anchorId} class="text-3xl font-medium">{title}</h4>
        <span class="inline-flex gap-2">
          <a class="opacity-50 hover:opacity-100" href={`https://${webUrl}/`}>
            web
          </a>
          <a
            class="opacity-50 hover:opacity-100"
            href={`https://github.com/${githubRepo}/`}
          >
            src
          </a>
        </span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Project;
