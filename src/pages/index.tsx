import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../components/Header";

const TABS = [
  {
    name: "Good",
    src: "/health-and-safety.svg",
    text: "Inventory Status",
    color: "#01A768",
    backColor: "#A6DBCB",
    link: {
      href: "#",
      text: "View Detailed Report",
    },
  },
  {
    name: "Rs. 8,55,875",
    src: "/payment.svg",
    text: "Revenue : Jan 2022",
    color: "#FED600",
    backColor: "#F2E9AC",
    link: {
      href: "#",
      text: "View Detailed Report",
    },
  },
  {
    name: "1087",
    src: "/medical.svg",
    text: "Medicine Shortage",
    color: "#03A9F5",
    backColor: "#A7DBF5",
    link: {
      href: "#",
      text: "Visit Inventory",
    },
  },
  {
    name: "01",
    src: "/file-icon.svg",
    text: "Medicine Shortage",
    color: "#F44336",
    backColor: "#EEBEBE",
    link: {
      href: "#",
      text: "Resolve Now",
    },
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 justify-items-center items-center p-6">
        {TABS.map(({ src, link, text, color, backColor, name }, index) => (
          <div
            key={index}
            className="flex flex-col bg-white justify-end items-center gap-2 rounded pt-2"
            style={{
              border: "1px solid " + backColor,
              height: "100%",
              width: "100%",
            }}
          >
            <img src={src} />
            <div className="flex flex-col items-center font-extrabold text-lg text-gray-900">
              {name}
            </div>
            <p className="text-center">{text}</p>
            <div
              className="w-full hover:opacity-60 transition"
              style={{ backgroundColor: backColor }}
            >
              <a href={link.href}>
                <p className="text-[14px] text-center p-2">
                  {link.text} &#x21e8;
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
