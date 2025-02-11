import trendifyToken from "@/assets/images/trendify-token.png";
import nebulaNexus from "@/assets/images/nebula-nexus.png";
import stacktically from "@/assets/images/stacktically.png";
import topAiTool from "@/assets/images/topaitools.png";
import steezy from "@/assets/images/steezy.png";
import HMS from "@/assets/images/HMS.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "steezy",
    year: "2024",
    title: "Dance classes",
    results: [
      { title: "Interactive online dance platform" },
      { title: "Seamless, responsive design" },
      { title: "User engagement through community" },
    ],
    link: "https://www.steezy.co/",
    image: steezy,
  },
  {
    company: "TopAI.tools",
    year: "2024",
    title: "AI Tool Aggregator",
    results: [
      { title: "Optimized user interface" },
      { title: "Seamless search for AI tools" },
      { title: "Top AI tools for diverse needs" },
    ],
    link: "https://topai.tools/",
    image: topAiTool,
  },
  {
    company: "Sharethumb",
    year: "2024",
    title: "Hospital Management System Website",
    results: [
      { title: "Enhanced user experience" },
      { title: "Easy doctor and service search" },
      { title: "Fast access to healthcare services." },
    ],
    link: "https://samarthpediatric.sharethumb.com/",
    image: HMS,
  },
  {
    company: "Trendify Tokens",
    year: "2023",
    title: "Blockchain-based Application",
    results: [
      { title: "Blockchain app for multi-token creation" },
      { title: "Improved mobile support with Wagmi" },
      { title: "Enhanced scalability and user accessibility" },
    ],
    link: "https://trendifytokens.io/",
    image: trendifyToken,
  },
  {
    company: "Nebula Nexus Innovations",
    year: "2022",
    title: "EdTech Website",
    results: [
      { title: "Responsive, SEO-friendly landing page" },
      { title: "Achieved a 50% reduction in page load time" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://www.nebula-nexus-innovations.in/",
    image: nebulaNexus,
  },
  {
    company: "stacktically",
    year: "2020",
    title: "IT Solutions Website",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.stacktically.com/",
    image: stacktically,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase font-bold tracking-widest text-sm bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex gap-2">
                    <span>{project?.company}</span>
                    <span>&bull;</span>
                    <span>{project?.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project?.title}
                  </h3>
                  <hr className="border-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project?.results?.map((result) => (
                      <li
                        key={result?.title}
                        className="text-sm md:text-base text-white/50 flex gap-2"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result?.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project?.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
