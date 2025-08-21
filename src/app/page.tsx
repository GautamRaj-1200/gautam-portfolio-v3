import Projects from "@/components/Projects";
import Thinking from "@/components/Thinking";
import LearningLog from "@/components/LearningLog";
import { intro } from "@/lib/constants";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
export default function Home() {
  return (
    <>
      <>
        <div className="my-4 px-4 flex flex-col gap-4">
          <h2 className="text-xl tracking-wide font-semibold text-justify">
            <p>{intro.introduction}</p>
            <p>{intro.learning}</p>
            <p>
              {intro.hobby1}{" "}
              <a
                href={intro.ytDownloader}
                target="_blank"
                className="text-[var(--accent-color)] cursor-pointer italic"
              >
                {intro.techCTA}
                {", "}
              </a>
              {intro.hobby2}{" "}
              <a
                href={intro.myBlog}
                target="_blank"
                className="text-[var(--accent-color)] cursor-pointer italic"
              >
                {intro.blogCTA}
                {", "}
              </a>
              {" and "}
              {intro.hobby3}{" "}
              <a
                href={intro.origami}
                target="_blank"
                className="text-[var(--accent-color)] cursor-pointer italic"
              >
                {intro.origamiCTA}
                {"."}
              </a>
            </p>
          </h2>
          <Socials />
          <Projects />
          <Thinking />
          <LearningLog />
          <Skills />
        </div>
      </>
    </>
  );
}
