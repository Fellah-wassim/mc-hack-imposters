import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Login: NextPage = () => {
  return (
    <div className="flex h-screen flex-col gap-y-2 items-center justify-center">
      <div>
        <p className="">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="h-20 w-20 object-contain"
          />
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <input className="input" placeholder="username" />
        <input className="input" placeholder="password" />
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Login;
