import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.username !== "admin") {
      setError("Username is not correct");
      return;
    }
    if (value.password !== "admin") {
      setError("Password is not correct");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>PHARMA ONE - Login</title>
      </Head>
      <div className="grid grid-cols-1 font-serif md:grid-cols-2 h-screen w-full">
        <div className="relative">
          <div className="bg-[url(/login-bg-2.png)] h-full w-full bg-cover " />
          <div className="absolute bg-primary h-full w-full inset-0 opacity-25" />
        </div>
        <div className="items-center flex  flex-col w-full p-4">
          <div className="max-w-screen-lg w-full h-full flex flex-col justify-between">
            <div className="flex items-center md:justify-start justify-center w-full">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={50}
                height={200}
                className="h-16 object-contain "
              />
              <h1 className="font-semibold text-xl text-gray-900">
                PHARMA ONE
              </h1>
            </div>
            <div className="w-full flex justify-start">
              <form
                onSubmit={onSubmit}
                className="flex flex-col w-full gap-y-4 p-6 items-center"
              >
                <h1 className="text-4xl text-gray-900 font-semibold">
                  Sign In
                </h1>
                <input
                  name="username"
                  type={"text"}
                  onChange={onChange}
                  value={value.username}
                  className="text-gray-800 px-2 py-2.5 text-sm outline-none w-full max-w-xs border-b-primary border-b-2"
                  placeholder="Username"
                />
                <input
                  name="password"
                  type={"password"}
                  onChange={onChange}
                  value={value.password}
                  className="text-gray-800 px-2 py-2.5 outline-none text-sm border-b-primary w-full max-w-xs border-b-2"
                  placeholder="Password"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="bg-primary max-w-[16rem] text-sm rounded text-white px-14   hover:bg-opacity-90 transition  py-3"
                >
                  Login
                </button>
              </form>
            </div>
            <div className=" w-full flex justify-center">
              <p className="text-xs text-center">
                Copyright ©2023 website.com All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
