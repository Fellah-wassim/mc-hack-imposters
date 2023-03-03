import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`PHARMA ONE - ${title}`}</title>
      </Head>
      <h1 className="font-bold text-2xl text-gray-900">{title}</h1>
    </>
  );
};

export default Header;
