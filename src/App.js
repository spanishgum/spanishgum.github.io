import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import { ThemeProvider } from "@material-ui/core";
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
