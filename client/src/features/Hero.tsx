import { NextPage } from "next";
import Image from "next/image";

import HeroImage from "/public/images/pal-removebg-preview.png";

const Hero: NextPage = () => {
  return (
    <main className="h-54 relative w-full mx-auto mt-14 md:ml-28 flex-col md:flex md:w-5/6 items-center justify-around bg-gradient-to-r from-gray-300 to-violet-200 shadow-lg rounded-md">
      <section className="w-full lg:w-2/5 text-2xl leading-8 tracking-wider">
        <span className="text-indigo-400">Building</span> relationship with God,{" "}
        <span className="text-indigo-500">Consecrated</span> in priesthood and
        will sound an <span className="text-red-500">alarm of holiness</span>.
        <section className="mt-2 text-sm text-gray-400">
          Gen 7:23, Mtt 6:5
        </section>
      </section>
      <Image src={HeroImage} alt="" height={300} width={250} className="flex w-full items-center"/>
    </main>
  );
};

export default Hero;
