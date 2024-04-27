import React from "react";
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

export default function Header({ menu }: any) {
  const { data: session } = useSession();
  return (
    <header className="flex lg:h-24 h-16 items-center gap-4 dark:bg-gray-800/40 justify-between">
      <div
        onClick={() => menu((prev: any) => !prev)}
        className="hidden md:flex lg:hidden"
      >
        <HamburgerMenu />
      </div>
      <div className="w-full flex-1">
        <form>
          <div className="hidden md:flex md:ml-7 lg:ml-0 items-center border md:w-[245px] xl:w-[343px] justify-between px-4 rounded-md bg-[#FAFAFA]">
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

            <SearchIcon
              className="h-4 w-4  text-gray-500 dark:text-gray-400"
              fill="gray"
            />
          </div>
        </form>
      </div>
      <div className="flex w-[364px] items-center justify-end gap-7">
        <Link href="#">
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
    </header>
  );
}

interface svgProps {
  className?: string;
  [propName: string]: any;
}

function SearchIcon({ props, fill }: svgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2307 8.16966C15.9089 9.92708 15.8448 12.7123 14.0874 14.3906C12.3299 16.0688 9.54476 16.0047 7.86647 14.2473C6.18819 12.4898 6.25235 9.70465 8.00977 8.02637C9.76719 6.34809 12.5524 6.41224 14.2307 8.16966ZM16.013 15.2486C18.0243 12.7836 17.9311 9.14871 15.6771 6.78839C13.2359 4.23214 9.18475 4.13883 6.6285 6.57996C4.07225 9.0211 3.97893 13.0723 6.42007 15.6285C8.67409 17.9888 12.3008 18.2493 14.8559 16.3537L16.5476 18.1252C16.8527 18.4447 17.3591 18.4564 17.6787 18.1512C17.9982 17.8461 18.0099 17.3397 17.7047 17.0201L16.013 15.2486Z"
        fill="#B2B2B2"
      />
    </svg>
  );
}

function HamburgerMenu({ props, fill }: svgProps) {
  return (
    <svg
      {...props}
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
