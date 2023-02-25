interface ProjectsSectionProps {
  contentClass?: string;
}

const ProjectsSection = ({ contentClass }: ProjectsSectionProps) => {
  return (
    <section>
      <div class={contentClass}>
        <h3 class="text-5xl mb-4">project project project</h3>
        <div class="mb-4">
          <h4 class="text-3xl">VoteVote</h4>
          <p>
            An educational toy for voting theory nerds to simulate a single
            election across dozens of different voting methods including Ranked
            Choice, Approval, Borda Count, Copeland, FPTP, Condorcet, and many
            more you've probably never heard of! Built with Typescript, React,
            D3, and styled-components.
          </p>
        </div>
        <div class="mb-4">
          <h4 class="text-3xl">bookbook</h4>
          <p>
            Democratic decision making for book clubs. bookbook (always
            lowercased) utilizes ranked choice voting to allow members to rank
            their preferences for their next read. The app is dedicated to a
            minimalist setup design philosophy (inspired by when2meet) and
            requires no emails. Just make a "ballot" and an admin code and share
            the url with your friends!
          </p>
        </div>
        <div>
          <h4 class="text-3xl">Polylingual RCV</h4>
          <p>
            Ranked choice voting, or instant runoff voting, is one of the
            simplest electoral system that allows voters to rank their preferred
            candidates in order. A personal project of mine has been to try to
            write an algorithm for RCV in as many programming languages as I
            can.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
