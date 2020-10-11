import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import withReduxStore from "../utils/with-redux-store";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.Fragment>
        <Head></Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
