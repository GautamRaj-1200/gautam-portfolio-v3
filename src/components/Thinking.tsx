import { howIThink } from "@/lib/constants";

const Thinking = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-[var(--accent-color)]">
        {howIThink.title}
      </h2>

      <ul className="list-disc pl-5 flex flex-col gap-1">
        {howIThink.points.map((point, index) => (
          <li key={index} className="tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Thinking;
