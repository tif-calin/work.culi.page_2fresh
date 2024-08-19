import { ComponentProps } from "preact";
import Project from "./Project.tsx";

interface ProjectsSectionProps {
  contentClass?: string;
}

const PROJECTS: ComponentProps<typeof Project>[] = [
  {
    title: "VoteVote",
    description:
      "An educational toy for voting theory nerds to simulate a single \
       election across dozens of different voting methods including Ranked \
       Choice, Approval, Borda Count, Copeland, FPTP, Condorcet, and many \
       more you've probably never heard of! Built with Typescript, React, \
       D3, and styled-components.",
    webUrl: "votevote.page",
    githubRepo: "tif-calin/votevote",
  },
  {
    title: "bookbook",
    description: 'Democratic decision making for book clubs. bookbook (always \
       lowercased) utilizes ranked choice voting to allow members to rank \
       their preferences for their next read. The app is dedicated to a \
       minimalist setup design philosophy (inspired by when2meet) and \
       requires no emails. Just make a "ballot" and an admin code and share \
       the url with your friends!',
    webUrl: "bookbookbook.club",
    githubRepo: "openbookbook/bookbook-web",
  },
  {
    title: "A1 Elderly Care",
    description:
      "A hand-made website I made for a friend. An exercise in 'use the \
       platform' — it is less than 512kb in total and almost completely \
       HTML/CSS while following SEO and a11y best practices.",
    webUrl: "a1elderly.care",
    githubRepo: "a1elderlycare/a1elderly.care",
  },
  // {
  //   title: "Polylingual RCV",
  //   description:
  //     "Ranked choice voting, or instant runoff voting, is one of the \
  //      simplest electoral system that allows voters to rank their preferred \
  //      candidates in order. A personal project of mine has been to try to \
  //      write an algorithm for RCV in as many programming languages as I \
  //      can.",
  // },
];

const ProjectsSection = ({ contentClass }: ProjectsSectionProps) => {
  return (
    <section>
      <div class={contentClass + " m-16"}>
        <h3 class="text-5xl mb-4">Past Projects</h3>

        {PROJECTS.map((project) => <Project {...project} />)}
      </div>
    </section>
  );
};

export default ProjectsSection;
