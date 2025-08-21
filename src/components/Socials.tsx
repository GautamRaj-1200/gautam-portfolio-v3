import React from "react";

const Socials = () => {
  return (
    <section id="socials">
      <h2 className="text-2xl font-bold text-[var(--accent-color)] mb-4">
        Socials
      </h2>
      <div className="flex flex-row gap-4">
        <a
          href="https://github.com/GautamRaj-1200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/grajdev12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>LinkedIn</p>
        </a>
        <a
          href="https://x.com/edge_case_v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Twitter</p>
        </a>
        <a href="mailto:gautamrajv2@gmail.com">
          <p>Email</p>
        </a>
      </div>
    </section>
  );
};

export default Socials;
