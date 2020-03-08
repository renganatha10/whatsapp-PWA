import React from "react";
import Head from "next/head";
import GroupDetailsHeader from "../components/GroupInfoHeader";
import UserDescription from "../components/UserDescription";

const Home = () => {
  return (
    <div className="main">
      <Head>
        <title>WhatsWeb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container h-full w-1/2 bg-gray-300">
        <GroupDetailsHeader />
        <UserDescription />
      </main>
    </div>
  );
};

export default Home;
