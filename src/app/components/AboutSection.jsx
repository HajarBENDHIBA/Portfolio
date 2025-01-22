"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiMongodb className="text-green-500" /> MongoDB
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiExpress className="text-gray-500" /> Express
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiReact className="text-blue-500" /> React
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiNodedotjs className="text-green-700" /> Node.js
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiJavascript className="text-yellow-500" /> JavaScript
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiTypescript className="text-blue-700" /> TypeScript
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiNextdotjs className="text-black dark:text-white" /> Next.js
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiTailwindcss className="text-teal-500" /> Tailwind CSS
        </li>
        <li className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg text-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <SiBootstrap className="text-purple-500" /> Bootstrap
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-lg">
        <li> Full Stack Development Certification at Gomycode/Jadara Foundation <br /><span>6 Month Bootcamp 2024/2025.</span></li>
        <li>Bachelor&apos;s degree in Economics and Management <br /><span>Graduated in 2020.</span></li>
        <li>Baccalaureate of Physics and Chemistry <br /><span>Graduated in 2017.</span></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-gradient-to-b py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left: Image */}
        <Image
          src="/images/about-image2.png"
          alt="Development"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />

        {/* Right: Content */}
        <div className="mt-4 md:mt-0 flex flex-col text-left h-full">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed mb-8">
            I am a full-stack web developer who loves creating interactive and
            responsive web applications. Skilled in technologies like{" "}
            <span className="font-semibold">JavaScript, React, Node.js, Express, MongoDB,</span>{" "}
            and more, I am passionate about learning and improving. I thrive in
            collaborative environments and look forward to contributing to
            exceptional projects.
          </p>

          {/* Tabs */}
          <div className="flex flex-row justify-start mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          {/* Tab Content */}
          <div>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
