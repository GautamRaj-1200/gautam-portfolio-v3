import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 bg-[var(--background)]/50 backdrop-blur-sm border-b-[0.5px] border-[var(--accent-color)]">
        <nav className="p-4 flex md:justify-between justify-center items-center flex-wrap  max-w-5xl mx-auto">
          <Link href="/">
            <h1 className="text-3xl font-semibold">Gautam Raj</h1>
          </Link>
          <ul className="flex justify-center items-center md:gap-4 gap-2 flex-wrap">
            <li>
              <Link href="https://blogs.gautamraj.space/" target="_blank">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
