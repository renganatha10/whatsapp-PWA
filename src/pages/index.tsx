import React from "react";
import Head from "next/head";
import Button from "../components/Button";

const Home = () => (
  <div className="main">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="container">
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
      <Button />
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="jane@example.com"
      />
    </main>
    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>
  </div>
);

export default Home;
