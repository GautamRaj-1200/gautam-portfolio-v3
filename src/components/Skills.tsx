import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-[var(--accent-color)]">
          Tech I work with
        </h2>
        <h3 className="text-md font-bold">Languages</h3>
        <div className="flex flex-row gap-2 flex-wrap">
          <Skill name="Python" />
          <Skill name="JavaScript" />
          <Skill name="TypeScript" />
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="SQL" />
        </div>
        <h3 className="text-md font-bold">Frontend</h3>
        <div className="flex flex-row gap-2 flex-wrap">
          <Skill name="React" />
          <Skill name="Next.js" />
          <Skill name="Tailwind" />
          <Skill name="TypeScript" />
          <Skill name="JavaScript" />
          <Skill name="HTML" />
          <Skill name="CSS" />
        </div>
        <h3 className="text-md font-bold">Backend</h3>
        <div className="flex flex-row gap-2 flex-wrap">
          <Skill name="Node.js" />
          <Skill name="Express" />
          <Skill name="MongoDB" />
          <Skill name="PostgreSQL" />
          <Skill name="MySQL" />
        </div>
        <h3 className="text-md font-bold">Tools</h3>
        <div className="flex flex-row gap-2 flex-wrap">
          <Skill name="Git" />
          <Skill name="GitHub" />
          <Skill name="Docker" />
        </div>
      </section>
    </>
  );
};

const Skill = ({ name }: { name: string }) => {
  return (
    <p className="px-4 py-2 bg-gray-800/50 border border-gray-300 rounded-md text-sm">
      {name}
    </p>
  );
};

export default Skills;
