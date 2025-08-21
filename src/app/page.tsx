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
          <h3 className="text-lg tracking-wide font-bold">
            {intro.introduction}
          </h3>
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
