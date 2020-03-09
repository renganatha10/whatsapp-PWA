import React from "react";
import Head from "next/head";
import Groups from "../../containers/Groups";
import Messages from "../../containers/Messages";

const MessagesPage = () => {
  return (
    <div className="main bg-purple-500 lg:px-16">
      <Head>
        <title>WhatsWeb</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="container flex h-full bg-gray-300">
        <div className="lg:w-1/3 hidden lg:block border-r h-full border-gray-400 border-solid">
          <Groups />
        </div>
        <div className="lg:w-2/3 w-full h-full border-r border-gray-400 border-solid">
          <Messages />
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;
