import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

import Logo from "/public/images/crown2.webp";

const Header: NextPage = () => {
  return (
    <main className="sticky top-0 z-30 flex items-center justify-around bg-gradient-to-r from-gray-200 to-gray-100 py-3">
      <section className="text-2xl font-bold tracking-widest">
        <span className="text-gray-400">P</span>R
        <span className="text-gray-500">I</span>E
        <span className="text-gray-400">S</span>T
        <span className="text-gray-500">L</span>Y
      </section>
      <div className="hidden items-center space-x-12 text-sm md:flex">
        <Link href="/" className="nav-link">
          Carsor Leaders
        </Link>
        <Link href="/" className="nav-link">
          Priests
        </Link>
      </div>
      <section className="flex space-x-4 items-center">
        <Link
          href="/upload"
          className="rounded-md bg-blue-500 p-2 font-bold text-white transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        >
          Upload
        </Link>
        <MenuIcon size="large w-4 h-4"/>
      </section>
    </main>
  );
};

export default Header;
