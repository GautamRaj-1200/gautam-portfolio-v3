import { learningLog } from "@/lib/constants";

const LearningLog = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[var(--accent-color)]">{learningLog.title}</h2>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        {learningLog.points.map((point, index) => (
          <li key={index} className="tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningLog;
