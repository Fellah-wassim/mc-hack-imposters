import React from "react";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return <h1 className="font-bold text-2xl text-gray-900">{title}</h1>;
};

export default Header;
