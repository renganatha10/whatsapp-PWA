import React from "react";
import Head from "next/head";
import Groups from "../containers/Groups";

const Home = () => {
  return (
    <div className="main bg-purple-500 lg:px-16">
      <Head>
        <title>WhatsWeb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex h-full bg-gray-300">
        <div className="lg:w-1/3 w-full border-r h-full border-gray-400 border-solid">
          <Groups />
        </div>
        <div className="lg:mx-40 lg:block hidden lg:w-2/3 lg:h-full">
          <div className="flex h-full">
            <img src="./icons/group_chat.svg" alt="GroupChat" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
