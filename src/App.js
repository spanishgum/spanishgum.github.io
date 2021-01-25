import React from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "@material-ui/core";

import { Router } from "@reach/router";
import theme from "./components/theme";
import { Header, Body, Footer, Divider } from "./components/page";

const App = () => {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <Header />
        <Divider />
        <Body>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </Body>
        <Divider />
        <Footer />
      </ThemeProvider>
    </Root>
  );
};

export default App;
