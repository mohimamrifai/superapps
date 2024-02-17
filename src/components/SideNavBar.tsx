"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  UserSearch,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "About",
    href: "/about",
    icon: UserSearch,
  },
];

export default function SideNavBar({
  open,
  setOpen,
}: {
  open: any;
  setOpen?: any;
}) {
  const pathName = usePathname();
  return (
    <div
      className={` border-gray-300 h-full z-50 fixed top-0 left-0 overflow-clip text-center py-5 transition-all duration-200 bg-white ${
        open ? "w-[150px] border-none" : "w-[70px] border-r-[0.5px]"
      }`}
    >
      <div className={`flex ${open ? "justify-end" : "justify-center"}`}>
        <Button
          onClick={() => setOpen(!open)}
          className={`mb-5 p-0 ${open ? "w-4/12 rounded-none bg-gray-800 opacity-90 -mr-1" : "w-8/12"}`}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
      <Link
        href="/"
        className="bg-primary w-[50px] h-[50px] rounded-full mx-auto flex justify-center items-center text-2xl font-bold text-slate-100"
      >
        IM
      </Link>

      <div className="mt-5">
        {links.map((link, index) => (
          <Button
            key={index}
            variant={link.href === pathName ? "default" : "outline"}
            asChild
            className={`p-0 mb-2 ${open ? "justify-start px-2 w-10/12 " : "justify-center w-8/12 " }`}
          >
            <Link className="gap-2" href={link.href}>
              <link.icon />
              <p
                className={`${
                  open ? "text-base" : "hidden"
                } transition-all duration-200`}
              >
                {link.title}
              </p>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
