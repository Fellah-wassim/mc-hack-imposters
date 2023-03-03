import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="text-red-500">
      <Header title="Dashboard" />
    </div>
  );
};

export default Home;
