import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GroupPic from "../features/GroupPic";
import Header from "../features/Header";
import Hero from "../features/Hero";
import Testimonial from "../features/Testimonial";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Priestly</title>
        <meta name="description" content="created for priestly generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container min-h-screen w-full bg-gray-100">
        <Header />
        <Hero />
        <Testimonial />
        <GroupPic />
      </main>
    </>
  );
};

export default Home;
