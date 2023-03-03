import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.replace("/auth/login");
    }
  }, []);
  return <div className="text-red-500">You are in home page</div>;
};

export default Home;
