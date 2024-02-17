import React from "react";
import Marquee from "react-fast-marquee";

const skills = [
  "Javascript",
  "Typescript",
  "Html",
  "Css",
  " Tailwinnd Css",
  "Bulma",
  "React js",
  "Next js",
  "Node js",
  "Express Js",
];

export default function Skills() {
  return (
    <>
      <Marquee direction="left" speed={40}>
        {skills.map((skil) => (
          <div
            key={skil}
            className="py-2 px-4 border-[1px] border-gray-400 mx-3 rounded-md mt-2"
          >
            {skil}
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" delay={10} speed={40} className="mt-3">
        {skills.map((skil) => (
          <div
            key={skil}
            className="py-2 px-4 border-[1px] border-gray-400 mx-3 rounded-md mt-2"
          >
            {skil}
          </div>
        ))}
      </Marquee>
    </>
  );
}
