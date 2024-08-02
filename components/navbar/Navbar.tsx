import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-500 bg-opacity-30 p-2 m-2 rounded">
      <Link className="mr-2 flex items-center" href="/">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map(({ path, text }) => (
        <Link key={path} className="mr-2" href={path}>
          {text}
        </Link>
      ))}
    </nav>
  );
};
