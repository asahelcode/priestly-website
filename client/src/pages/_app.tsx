import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../features/Footer";
import Header from "../features/Header";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
