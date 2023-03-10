import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineInventory2, MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { GoSettings } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { RiLogoutBoxRLine, RiNotification2Fill } from "react-icons/ri";
import { BsVirus2 } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";

type Props = {
  children: React.ReactNode;
};

const SIDEMENU = [
  {
    name: "Dashboard",
    Icon: MdOutlineSpaceDashboard,
    route: "/",
  },
  {
    name: "Inventory",
    Icon: MdOutlineInventory2,
    route: "/inventory",
  },
  {
    name: "Reports",
    Icon: TfiStatsUp,
    route: "/reports",
  },
  {
    name: "Configuration",
    Icon: GoSettings,
    route: "/config",
  },
  {
    name: "Notifications",
    Icon: RiNotification2Fill,
    route: "/notifications",
  },
  {
    name: "Covid 19",
    Icon: BsVirus2,
    route: "/covid",
  },
  {
    name: "Get Technical Help",
    Icon: FiHelpCircle,
    route: "/help",
  },
];

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const logOutHandler = () => {
    localStorage.clear();
    router.replace("/auth/login");
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && router.pathname !== "/auth/login") {
      router.replace("/auth/login");
    } else if (isLoggedIn && router.pathname === "/auth/login") {
      router.replace("/");
    }
  }, [router.pathname]);

  if (router && router.pathname === "/auth/login") {
    return <>{children}</>;
  }
  return (
    <div className="grid grid-cols-4 lg:grid-cols-5 h-screen">
      <div className="col-span-1 lg:flex flex-col hidden  bg-gray-700 h-full">
        <div className="bg-gray-800 p-2">
          <div className="flex items-center md:justify-start justify-center w-full">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={50}
              height={200}
              className="h-10 object-contain "
            />
            <h1 className="font-semibold text-lg text-white">PHARMA ONE</h1>
          </div>
        </div>
        <div className="p-2  my-6 flex gap-4 items-center w-full  transition cursor-pointer">
          <Image
            src={"/top-g.jpg"}
            alt="top-g"
            className="h-10 w-10 rounded"
            width={50}
            height={50}
          />
          <div>
            <p className="text-white text-sm">Pharma Industry</p>
            <span className="text-xs text-yellow-400">Super Admin</span>
          </div>
          <div ref={ref} className="grow flex justify-end relative">
            <HiDotsVertical
              onClick={() => setIsOpen(!isOpen)}
              className="text-white cursor-pointer"
            />
            {isOpen && (
              <div className="text-gray-800 bg-white w-40 absolute top-[120%]">
                <div className="px-2 py-3 hover:bg-gray-100 transition flex items-center gap-x-2">
                  <BiUser />
                  <p className="text-sm">My profile</p>
                </div>
                <div
                  onClick={logOutHandler}
                  className="px-2 py-3 hover:bg-gray-100 transition flex items-center gap-x-2"
                >
                  <RiLogoutBoxRLine />
                  <p className="text-sm">Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            {SIDEMENU.slice(0, 4).map(({ Icon, name, route }, index) => {
              return (
                <Link
                  key={index}
                  href={route}
                  className={`px-2 py-4 flex text-white gap-4 items-center w-full ${
                    route === router.pathname
                      ? "bg-primary hover:bg-opacity-95"
                      : "hover:bg-gray-800"
                  } ${
                    index % 4 === 3 ? "border-b border-b-gray-600" : ""
                  }  transition cursor-pointer`}
                >
                  <Icon />
                  <p className="text-white text-sm">{name}</p>
                </Link>
              );
            })}
          </div>
          <div>
            {SIDEMENU.slice(4).map(({ Icon, name, route }, index) => {
              return (
                <Link
                  key={index}
                  href={route}
                  className={`px-2 py-4 flex text-white gap-4 items-center w-full ${
                    route === router.pathname
                      ? "bg-primary hover:bg-opacity-95"
                      : "hover:bg-gray-800"
                  } ${
                    index % 4 === 3 ? "border-b border-b-gray-600" : ""
                  }  transition cursor-pointer`}
                >
                  <Icon />
                  <p className="text-white text-sm">{name}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center bg-gray-800 text-xs text-white justify-between  p-2">
          <p>
            Powered by{" "}
            <span className="cursor-pointer hover:underline ">Imposters</span>{" "}
            2023
          </p>
          <span>v 1.2</span>
        </div>
      </div>
      <div className="h-full bg-gray-50 col-span-4 w-full flex overflow-auto justify-center">
        <div className="max-w-screen-xl w-full p-4 h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
