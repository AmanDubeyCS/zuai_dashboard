import React, { useState } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";
import { Notification, Message, DropDownSVG } from "../../Assets/AllSvg";
import Image from "next/image";
import userImage from "../../Assets/userImage.png";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {SearchIcon, HamburgerMenu} from "../../Assets/AllSvg"

export default function Header({ menu }: any) {
  const { data: session } = useSession();
  const [searchActive, setSearchActive] = useState(false)
  return (
    <header>
      <div className="flex lg:h-24 h-16 items-center gap-4 dark:bg-gray-800/40 justify-between">
      <div
        onClick={() => menu((prev: any) => !prev)}
        className="hidden md:flex lg:hidden"
      >
        <HamburgerMenu />
      </div>
      <div className="w-full flex-1">
        <form>
          <div className={`hidden md:flex md:ml-7 lg:ml-0 items-center border md:w-[245px] xl:w-[343px] justify-between px-4 rounded-md bg-[#FAFAFA]`}>
            <input
              className=" w-full px-4 py-[6px]  bg-transparent shadow-none appearance-none dark:bg-gray-950 border-none outline-none focus-visible:ring-0"
              placeholder="Search..."
              type="search"
            />
            <SearchIcon
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="gray"
            />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <div onClick={() => menu(true)}>
              <HamburgerMenu />
            </div>

            <div onClick={() => setSearchActive((prev)=> !prev)}>
            <SearchIcon
              className="h-4 w-4  text-gray-500 dark:text-gray-400"
              fill="gray"
            />
            </div>
          </div>
        </form>
      </div>
      <div className="flex w-[364px] items-center justify-end gap-7">
        <Link href="#" className="relative">
          <div className="absolute right-0 w-[10px] h-[10px] bg-red-600 rounded-full border border-white"></div>
          <Notification className="h-4 w-4 sm:w-full sm:h-full hover:fill-orange-600" />
        </Link>
        <Link href="#">
          <Message className="h-4 w-4 sm:w-full sm:h-full hover:fill-orange-600" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="p-0 bg-transparent hover:bg-transparent focus-visible:ring-transparent outline-none border-none no-underline"
              variant="ghost"
            >
              <Image
                alt="Avatar"
                className="rounded-full mr-2 h-8 w-8 sm:h-10 sm:w-10"
                src={userImage}
                style={{
                  aspectRatio: "42/42",
                  objectFit: "cover",
                }}
              />
              <span className="text-black mx-2 text-base font-medium hidden sm:flex">
              {session?.user?.name}
              </span>
              <DropDownSVG />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem><span className="font-bold">Email: </span>{session?.user?.email}</DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={() => signOut()}
                className="text-white w-full font-bold px-6 border-t text-lg text-center bg-red-500"
              >
                Log Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
      
      <div className={`${searchActive ? "" : "hidden"} mb-4 flex md:ml-7 lg:ml-0 items-center border md:w-[245px] xl:w-[343px] justify-between px-4 rounded-md bg-[#FAFAFA]`}>
            <input
              className=" w-full px-4 py-[6px]  bg-transparent shadow-none appearance-none dark:bg-gray-950 border-none outline-none focus-visible:ring-0"
              placeholder="Search..."
              type="search"
            />
            <SearchIcon
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="gray"
            />
          </div>
    </header>
  );
}

interface svgProps {
  className?: string;
  [propName: string]: any;
}


