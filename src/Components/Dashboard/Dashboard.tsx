import { Button } from "@/Components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/Components/ui/card";
import { UpArrow, Pin, Pointers, DropDownSVG } from "../../Assets/AllSvg";
import graphUpSVG from "../../Assets/Graphupsvg.svg";
import graphUpShadeSVG from "../../Assets/GraphUpShadesvg.svg";
import Image from "next/image";
import Link from "next/link";

interface CardDashboardProps {
  title: string;
  description: string;
  p: string;
  bgColor: string;
  textColor: string;
}

interface GraphDashboardProps {
  title: string;
  numbers: number;
  peopleMen: number;
  peopleWomen: number;
  spike: number;
}

const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  description,
  p,
  bgColor,
  textColor,
}) => {
  return (
    <Card
      className={`flex flex-col sm:col-span-2 col-span-6 gap-3 h-auto`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <CardHeader className="p-3 pl-5 pb-0 ">
        <CardTitle className="xl:text-lg text-base font-medium ">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pl-5 pt-0">
        <div className="flex gap-3 flex-col text-left justify-between">
          <span className="text-[32px] lg:text-4xl font-medium">
            {description}
          </span>
          <span
            className="text-sm lg:text-base font-normal"
            style={{ color: textColor }}
          >
            {p}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const GraphDashboard: React.FC<GraphDashboardProps> = ({
  title,
  numbers,
  peopleMen,
  peopleWomen,
  spike,
}) => {
  return (
    <Card className="flex flex-col sm:col-span-3 col-span-6 gap-3 h-auto">
      <CardContent className="flex justify-between p-5 pt-0">
        <div className="flex gap-5  flex-col text-left justify-between">
          <CardTitle className="absolute text-base md:text-lg pt-3 font-medium">
            {title}
          </CardTitle>
          <span className="text-[42px] lg:text-5xl font-medium mt-14">
            {numbers}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-normal">{peopleMen} Men</span>
            <span className="text-xs font-normal">{peopleWomen} Women</span>
          </div>
        </div>
        <div>
          <div className=" flex flex-col w-full gap-1 pt-9">
            <div className="relative flex flex-col items-center justify-center h-full w-full">
              <div className=" absolute -top-5 flex flex-col items-center space-y-2 mt-4">
                <span className="text-[10px] text-[#FF5151] font-medium">
                  +{spike}%
                </span>
                <div className="flex items-center space-x-2">
                  <UpArrow />
                </div>
              </div>
              <div className="w-full max-w-md mt-4">
                <Image src={graphUpSVG} alt="graph-line" className="absolute" />
                <Image src={graphUpShadeSVG} alt="graoh-shade" />
              </div>
            </div>
            <span className="bg-[#FFEFE7] rounded p-1 text-xs font-normal mt-3">
              +{spike}% Past Month
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Dashboard() {
  const scheduleList = {
    priority: [
      {
        title: "Review candidate application",
        time: "5 minuts ago",
      },
      {
        title: "Review candidate application",
        time: "5 minuts ago",
      },
    ],
    other: [
      {
        title: "Interview with candidates",
        time: "5 minuts ago",
      },
      {
        title: "Short meeting with product designer from IT Department",
        time: "5 minuts ago",
      },
      {
        title: "Review candidate application",
        time: "5 minuts ago",
      },
    ],
  };

  const announcments = [
    {
      title: "Outing schedule for every department",
      time: "5 minuts ago",
    },
    {
      title: "Meeting HR Department",
      time: "5 minuts ago",
    },
    {
      title: "IT Department Need 2 more talants for UI/UX Designer position",
      time: "5 minuts ago",
    },
    {
      title: "Review candidate application",
      time: "5 minuts ago",
    },
    {
      title: "Review candidate application",
      time: "5 minuts ago",
    },
  ];
  return (
    <div className="grid h-auto w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold p-3 pl-0">Dashboard</h1>
        <main className="flex-1 grid grid-cols-12 gap-4 md:gap-8">
          <div className="flex flex-col lg:col-span-7 col-span-12 gap-5">
            <div className="grid grid-cols-6 gap-3">
              <CardDashboard
                title="Available Position"
                description="24"
                p="4 Urgent needed"
                bgColor="#FFEFE7"
                textColor="#FF5151"
              />
              <CardDashboard
                title="Job Open"
                description="10"
                p=" 4 Active hiring"
                bgColor="#E8F0FB"
                textColor="#3786F1"
              />
              <CardDashboard
                title="New Employees"
                description="24"
                p="4 Department"
                bgColor="#FDEBF9"
                textColor="#EE61CF"
              />
              <GraphDashboard
                title="Total Employees"
                numbers={316}
                peopleMen={120}
                peopleWomen={90}
                spike={2}
              />
              <GraphDashboard
                title="Talent Request"
                numbers={16}
                peopleMen={6}
                peopleWomen={10}
                spike={5}
              />
            </div>
            <div className="relative border rounded-lg">
              <div className="p-4 ">
                <div className="pb-4">
                  <CardTitle className="flex justify-between">
                    <span className="text-base sm:text-lg font-medium">
                      Announcement
                    </span>
                    <span className="flex gap-2 items-center text-xs font-normal border rounded-sm p-1 text-gray-400">
                      Today, 13 Sep 2021 <DropDownSVG className="w-3" />
                    </span>
                  </CardTitle>
                </div>
                <div className="flex flex-col gap-2 md:h-[300px] h-[250px] overflow-scroll">
                  <div className="flex flex-col gap-2">
                    {announcments.map((list, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-1 justify-between bg-[#FAFAFA] border border-[#E0E0E0] py-2 px-3 rounded-md">
                        <div className="flex flex-col gap-1">
                          <h3 className="flex md:w-[380px] text-sm sm:text-base flex-wrap">
                            {list.title}
                          </h3>
                          <div className="hidden sm:flex">
                            <span className="text-[10px]">{list.time}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="sm:hidden">
                            <span className="text-[10px]">{list.time}</span>
                          </div>
                          <div className="flex gap-4 items-center">
                            <Pin className="w-4 h-4 cursor-pointer" />
                            <Pointers className="cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute w-full flex justify-center text-center border-t-2 p-2 bottom-0 text-sm font-medium text-[#FF5151] bg-white">
                <Link href="#">
                  <h2>Create a New Schedule</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:col-span-5 col-span-12 md:gap-8 text-white">
            <div className="grid grid-cols-12 gap-5 ">
              <Card className="bg-[#1B204A] rounded-lg col-span-12 sm:col-span-5  lg:col-span-12">
                <CardHeader className="p-3 pl-6 bg-[#242a61] rounded-lg">
                  <CardTitle className="md:text-lg text-base font-medium text-white">
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-6 ">
                  <div className="flex flex-col text-[#ffffff] font-roboto">
                    <div className="flex flex-col text-left gap-2 py-6">
                      <span className="text-[10px] leading-3 font-normal opacity-60 ">
                        10.40 AM, Fri 10 Sept 2021
                      </span>
                      <h3 className="md:text-lg text-base font-medium">
                        You Posted a New job
                      </h3>
                      <p className="text-sm font-roboto opacity-60">
                        Kindly check the requirements and terms of work and make
                        sure everything is right
                      </p>
                    </div>
                    <div className="flex flex-col gap-4  lg:flex-row lg:items-center justify-between">
                      <h3 className="text-sm font-normal">
                        Today you makes 12 Activity
                      </h3>
                      <Button className="bg-[#FF5151] py-2 px-4 text-sm font-medium w-[160px] cursor-pointer">
                        See All Activity
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="relative border rounded-lg text-black col-span-12 sm:col-span-7 lg:col-span-12">
                <div className="p-4">
                  <div className="pb-4">
                    <div className="flex justify-between">
                      <span className="md:text-lg sm:text-base font-medium">
                        Upcoming Schedule
                      </span>
                      <span className="flex gap-2 items-center text-xs font-normal border rounded-sm p-1 text-gray-400 cursor-pointer">
                        Today, 13 Sep 2021 <DropDownSVG className="w-3" />
                      </span>
                    </div>
                  </div>
                  <div className="lg:h-[360px] sm:h-[250px] overflow-scroll">
                    <div className="flex flex-col gap-2">
                      <div>
                        <span className="text-xs text-[#686868]">Priority</span>
                        <div>
                          {scheduleList?.priority?.map((list, i) => (
                            <div key={i} className="flex flex-col gap-1 sm:flex-row justify-between bg-[#FAFAFA] border border-[#E0E0E0] py-3 px-4 rounded-md mt-2">
                              <div>
                                <h3 className="text-sm md:text-base">
                                  {list.title}
                                </h3>
                                <span className="hidden sm:flex text-[10px]">
                                  {list.time}
                                </span>
                              </div>

                              <div className="flex justify-between items-center">
                                <span className="flex sm:hidden text-[10px]">
                                  {list.time}
                                </span>
                                <Pointers />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-[#686868]">Other</span>
                        <div>
                          <div>
                            {scheduleList?.other?.map((list, i) => (
                              <div key={i} className="flex flex-col gap-1 sm:flex-row justify-between bg-[#FAFAFA] border border-[#E0E0E0] py-3 px-4 rounded-md mt-2">
                                <div>
                                  <h3 className="text-sm md:text-base">
                                    {list.title}
                                  </h3>
                                  <span className="hidden sm:flex text-[10px]">
                                    {list.time}
                                  </span>
                                </div>

                                <div className="flex justify-between items-center">
                                  <span className="flex sm:hidden text-[10px]">
                                    {list.time}
                                  </span>
                                  <Pointers className="cursor-pointer" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute w-full flex justify-center text-center border-t-2 p-2 bottom-0 text-sm font-medium text-[#FF5151] bg-white">
                  <Link href="#">
                    <h2>Create a New Schedule</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
