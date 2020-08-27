import React from "react";

import Groups from "../containers/Groups";

import { fetchGroups } from "../store/groups/actions";

const Home = () => {
  return (
    <div className="main bg-purple-500 lg:px-16">
      <main className="container flex h-full bg-gray-300">
        <div className="lg:w-1/3 w-full border-r h-full border-gray-400 border-solid">
          <Groups />
        </div>
        <div className="lg:mx-40 lg:block hidden lg:w-2/3 lg:h-full">
          <div className="flex h-full">
            {/* <img src="/icons/group_chat.svg" alt="GroupChat" /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  ctx.store.dispatch(fetchGroups("f15f3aa2-bee8-415b-84e7-d93c03d3ff53"));
  return {};
};

export default Home;
