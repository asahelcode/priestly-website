import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Logo from "/public/images/crown2.webp";

const Header: NextPage = () => {
  return (
    <main className="flex items-center justify-around sticky top-0 py-2">
      <Image src={Logo} alt="" width={70} height={70} />
      <div className="flex items-center space-x-12 text-sm">
        <Link href="/" className="nav-link">
          Carsor Leaders
        </Link>
        <Link href="/" className="nav-link">
          Priestly Generations
        </Link>
        <Link
          href="/upload"
          className="rounded-md bg-blue-500 p-2 font-bold text-white transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        >
          Upload
        </Link>
      </div>
    </main>
  );
};

export default Header;
