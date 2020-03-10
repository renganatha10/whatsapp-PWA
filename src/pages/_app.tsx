import React from "react";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";

import createStore from "../store";

import "../styles/tailwind.css";

interface MyAppProps {
  store: any;
}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>WhatsWeb</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#9f7aea" />
          <meta name="description" content="Clone Of WhatsAppWeb" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
