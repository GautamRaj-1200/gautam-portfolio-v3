import { projects } from "@/lib/constants";
import ytCompanion from "../../public/assets/yt-companion-portfolio.jpg";
import legalBlogs from "../../public/assets/legal-blogs-portfolio.jpg";
import Image from "next/image";
const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2 className="text-2xl font-bold mb-4 text-[var(--accent-color)]">
          Projects
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 tracking-wide">
            <div className="flex flex-row gap-4 items-center">
              <p className="text-xl font-bold">{projects.ytcompanion.title}</p>
              <a
                href={projects.ytcompanion.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm bg-gray-900/50 border border-gray-400 px-1 py-0.5 rounded-md">
                  Github
                </p>
              </a>
              <a
                href={projects.ytcompanion.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-sm bg-gray-900/50 border border-gray-400 px-1 py-0.5 rounded-md">
                  Deployed
                </p>
              </a>
            </div>
            <Image
              src={ytCompanion}
              alt="yt-companion"
              className="rounded-md md:w-[700px] h-[400px] w-full"
            />
            <p className="text-[var(--accent-color)]">
              {projects.ytcompanion.techStack}
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              {projects.ytcompanion.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 tracking-wide">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-xl font-bold">{projects.legalBlogs.title}</p>
                <a
                  href={projects.legalBlogs.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm bg-gray-900/50 border border-gray-400 px-1 py-0.5 rounded-md">
                    Github
                  </p>
                </a>
                <a
                  href={projects.legalBlogs.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-sm bg-gray-900/50 border border-gray-400 px-1 py-0.5 rounded-md">
                    Deployed
                  </p>
                </a>
              </div>

              <Image
                src={legalBlogs}
                alt="legal-blogs"
                className="rounded-md w-[700px] h-[400px]"
              />
              <p className="text-[var(--accent-color)]">
                {projects.legalBlogs.techStack}
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                {projects.legalBlogs.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
