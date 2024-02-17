"use client";
import React, { useEffect, useState } from "react";
import SideNavBar from "./SideNavBar";

export default function MainProvider({ children }: { children?: any }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!open)

    return setOpen(false)
  }, [])

  return (
    <>
      <SideNavBar open={open} setOpen={setOpen} />
      <div className={`ps-[70px]`}>{children}</div>
      {open ? <div onClick={() => setOpen(false)} className="absolute z-40 top-0 left-0 w-full bg-gray-800 opacity-90 h-[2000px]"></div> : null}
    </>
  );
}
