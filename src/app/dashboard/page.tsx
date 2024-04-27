'use client'
import Dashboard from "@/Components/Dashboard/Dashboard";
import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarActive, setSidebarActive] =useState(false)
  
  return (
    <div className="container">
      <div className="flex">
        <div className={`${sidebarActive ? "" : "hidden"} lg:flex`}>
          <Sidebar menu={(close: any) => setSidebarActive(close)}/>
        </div>
        <div className="w-full">
          <div className="relative border-b px-8 items-center">
            <Header menu={(close: any) => setSidebarActive(close)}/>
          </div>
          <div className="px-8 ">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

interface svgProps {
  className?: string;
  [propName: string]: any;
}

function HamburgerMenu({ props, fill }: svgProps) {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12.5H0V10.5H18V12.5ZM18 7.5H0V5.5H18V7.5ZM18 2.5H0V0.5H18V2.5Z"
        fill="#B2B2B2"
      />
    </svg>
  );
}