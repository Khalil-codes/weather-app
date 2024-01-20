import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";

import "../public/globals.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
