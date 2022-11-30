import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../features/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Priestly</title>
        <meta name="description" content="created for priestly generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container w-full mx-auto py-3 min-h-screen">
        <Header />
      </main>
    </>
  );
};

export default Home;
