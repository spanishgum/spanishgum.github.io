import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import PostContext from "./components/post/context";
import App from "./App";

const listing = require("./posts/listing.json");
const postListing = listing.map((item) => {
  return { link: item, content: require(`./posts/${item}`) };
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PostContext.Provider value={{ posts: postListing }}>
        <App />
      </PostContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
