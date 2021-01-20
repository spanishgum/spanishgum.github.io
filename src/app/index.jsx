import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import AppContext from "./context";
import Home from "./components/home";
import Post from "./components/post";

const listing = require("./components/post/listing.json");
const posts = Object.fromEntries(
  listing.map((item) => {
    return [item, require(`./components/post/entry/${item}`)];
  })
);

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const post = params.get("post");

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ posts }}>
        {post ? <Post post={post} /> : <Home />}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
