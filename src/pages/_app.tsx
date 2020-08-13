import React from "react";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/node";

import createStore from "../store";

import "../styles/tailwind.css";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
  });
}
interface MyAppProps {
  store: any;
  err: any;
}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, store, err } = this.props;
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
          <Component {...pageProps} err={err} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
