import React from "react";
import Head from "next/head";
import GroupDetailsHeader from "../components/GroupDetailHeader";

const Home = () => {
  return (
    <div className="main">
      <Head>
        <title>WhatsWeb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container h-full w-1/2 bg-gray-300">
        <GroupDetailsHeader
          avatarUrl={
            "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
          }
          groupName="Family"
          groupMembers="Diviya, Mohan, Appa, Amma, Relatives, Freiends, Whatweve, I am Long, Loose, Mental, What I am Doing, Dont kNow"
        />
      </main>
    </div>
  );
};

export default Home;
