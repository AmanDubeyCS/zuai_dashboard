"use client";
import React, { useState } from "react";
import Link from "next/link";
import {DashboardSvg, Employee, RecruitmentSVG, ScheduleSVG, Support, Department, SettingSVG} from "../../Assets/AllSvg"

interface NavLink {
  name: string;
  link: string;
  logo: any;
}

interface NavLinksProps {
  list: NavLink[];
  title: string;
}
const NavLinks = ({ list, title }: NavLinksProps) => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  return (
    <div className="flex-1 overflow-auto xl:px-8 px-8 sm:p-0">
      <span className="text-xs flex sm:justify-center xl:justify-start font-medium text-[#686868] ">
        {title}
      </span>
      <nav className="grid items-start text-sm font-medium sm:justify-center xl:justify-start">
        {list.map((link) => (
          <ul className="flex " onClick={() => setActiveLink(link.name)}>
            <Link
              className={`flex items-center gap-6 rounded-lg text-base font-medium py-4 text-gray-500 transition-all hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-50 ${
                activeLink === link.name ? "text-orange-600" : ""
              } `}
              href="#"
            >
              {link.logo}

              <span className="sm:hidden xl:flex">{link.name}</span>
            </Link>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default function Sidebar({ menu }: { menu: any }) {
  const navList: NavLink[] = [
    {
      name: "Dashboard",
      link: "#",
      logo: <DashboardSvg />,
    },
    {
      name: "Recruitement",
      link: "#",
      logo: <RecruitmentSVG />,
    },
    {
      name: "Schedule",
      link: "#",
      logo: <ScheduleSVG />,
    },
    {
      name: "Employee",
      link: "#",
      logo: <Employee />,
    },
    {
      name: "Department",
      link: "#",
      logo: <Department />,
    },
  ];

  const navOther: NavLink[] = [
    {
      name: "Support",
      link: "#",
      logo: <Support />,
    },
    {
      name: "Setting",
      link: "#",
      logo: <SettingSVG />,
    },
  ];
  return (
    <div className="fixed sm:relative xl:w-[292px] sm:w-[90px] w-[250px] overflow-hidden h-full bg-[#FAFAFA]  lg:block z-40 ">
      <div className="flex flex-col gap-2 xl:w-[292px] sm:w-[90px] w-[250px]">
        <span
          className="absolute sm:hidden right-3 text-xl flex justify-end p-5"
          onClick={() => menu(false)}
        >
          <CloseMenu />
        </span>
        <div className="flex h-[100px] mt-6 sm:mt-0 text-center justify-center items-center">
          <Link
            href="#"
            className="flex items-center gap-2 text-xl font-semibold xl:text-4xl"
          >
            <span>ZUAI</span>
          </Link>
        </div>
        <div className="flex flex-col gap-8 mt-6">
          <NavLinks list={navList} title="MAIN MENU" />
          <NavLinks list={navOther} title="OTHER" />
        </div>
      </div>
    </div>
  );
}

function CloseMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
