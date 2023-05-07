// import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import Sidbar from "../components/Sildebar/Sibar";
import Navbar from "y/components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toàn hihi</title>
        <meta name="description" content="Generated by create-t3-app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <>
        <Navbar />
        <Sidbar />
      </>
    </>
  );
};

export default Home;
