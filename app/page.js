import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Sections />
      <Footer />
    </>
  );
};

export default Page;
