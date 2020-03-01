import React from "react";
import Head from "next/head";
import GroupSearch from "../components/GroupSearch";
import GroupHeader from "../components/GroupHeader";
import Group from "../components/Group";

const Home = () => {
  const onChangeText = () => {
    return "";
  };

  return (
    <div className="main">
      <Head>
        <title>WhatsWeb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container w-1/4">
        <GroupHeader
          avatarUrl={
            "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
          }
        />
        <GroupSearch onChangeText={onChangeText} />
        <Group
          imageUrl={
            "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
          }
          heading={"CRED"}
          firstMessage={
            "Thanks for getting in touch. We request you to click on the link below to connect with CRED support: https://cred.onelink.me/k63y/support"
          }
          time={"10.50 PM"}
        />
        <Group
          imageUrl={
            "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
          }
          heading={"CRED"}
          firstMessage={
            "Thanks for getting in touch. We request you to click on the link below to connect with CRED support: https://cred.onelink.me/k63y/support"
          }
          time={"10.50 PM"}
        />
        <Group
          imageUrl={
            "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
          }
          heading={"CRED"}
          firstMessage={
            "Thanks for getting in touch. We request you to click on the link below to connect with CRED support: https://cred.onelink.me/k63y/support"
          }
          time={"10.50 PM"}
        />
      </main>
    </div>
  );
};

export default Home;
