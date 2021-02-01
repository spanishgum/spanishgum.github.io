import React, { useState } from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./components/theme";
import { Header, Body, Footer, Divider } from "./components/page";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const themeToggle = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <Root>
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <CssBaseline />
        <Header themeToggle={themeToggle} />
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
