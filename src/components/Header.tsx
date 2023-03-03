import React from "react";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return <h1 className="font-bold text-2xl text-black">{title}</h1>;
};

export default Header;
