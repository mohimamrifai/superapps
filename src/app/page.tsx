import React from "react";
import { Computer, Download } from "lucide-react";
import { CorouselProjects } from "@/components/CorouselProjects";
import Header from "@/components/Header";
import CorouselCareer from "@/components/CorouselCareer";
import Link from "next/link";
import CorouselService from "@/components/CorouselService";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="px-5 py-3">
      <Header />
      <span className="text-lg font-normal">Hello, My Name Is</span>
      <h1 className="text-2xl font-extrabold">MOHAMMAD IMAM RIFAI</h1>
      <div className="mt-5 mb-5 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Computer size={30} />
          <p className="font-semibold leading-5 text-lg">
            Professional Web <br /> Developer
          </p>
        </div>
      </div>
      <div>
        <ul className="ps-5 text-gray-700">
          <li className="list-disc">Remote Worker</li>
          <li className="list-disc">Based In Indramayu <span className="text-[11px] text-gray-500">ID</span></li>
        </ul>
      </div>
      <div className="py-5 border-b-[0.5px] border-gray-300">
        <h2 className="text-lg font-semibold mb2">About Me</h2>
        <p className="font-medium text-gray-700">
        I really enjoy coding and am enthusiastic about the world of web development technology. I have experience working on full-stack applications, particularly using JavaScript/TypeScript.
        </p>
      </div>
      <div className="pt-5 pb-1 border-b-[0.5px] border-gray-300">
        <h2 className="text-lg font-semibold mb-2">Projects Completed</h2>
        <CorouselProjects />
      </div>
      <div className="pt-5 pb-1 border-b-[0.5px] border-gray-300">
        <h2 className="text-lg font-semibold mb-1">Career</h2>
        <Link href={'#'} className="flex items-center gap-2 mb-2 text-gray-600 ">
          <Download size={18} className="animate-bounce" />
          <p>Resume</p>
        </Link>
        <CorouselCareer />
      </div>
      <div className="pt-5 pb-1 border-b-[0.5px] border-gray-300">
        <h2 className="text-lg font-semibold">Service</h2>
        <p className="text-sm text-gray-600 mb-2 italic">What can I do for you ?</p>
        <CorouselService />
      </div>
      <div className="pt-5 pb-1 border-b-[0.5px] border-gray-300">
        <h2 className="text-lg font-semibold mb-2">My Articles</h2>
        <CorouselProjects />
      </div>
      <div className="pt-5 pb-1 border-b-[0.5px] border-gray-300">
        <h2 className="text-lg font-semibold mb-2">My Skilss</h2>
        <Skills />
      </div>
    </div>
  );
}
