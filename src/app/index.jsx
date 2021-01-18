import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import AppContext from "./context";
import Home from "./components/home";
import Post from "./components/post";

const listing = require("./components/post/listing.json");
const posts = listing.map((item) => {
  return { link: item, content: require(`./components/post/entry/${item}`) };
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {posts.map(({ link, content }) => {
              return (
                <Route key={link} exact path={`/${link}`}>
                  <Post content={content} />
                </Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
