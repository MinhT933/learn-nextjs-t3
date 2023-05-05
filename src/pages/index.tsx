// import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import Sidbar from "../components/Sibar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toàn hihi</title>
        <meta name="description" content="Generated by create-t3-app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <>
        {/* <div>hihi</div>
        <div>hehe</div>
        <div>cho</div>
        <div>0wrewr</div> */}
        <Sidbar />
        {/* <div>
          <h1 className="text-3xl font-bold underline text-red-400 bg-red-500">
            Hello world!
          </h1>
        </div> */}
      </>
    </>
  );
};

export default Home;
