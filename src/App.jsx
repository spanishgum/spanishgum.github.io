import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostContext from "./components/post/context";
import Home from "./components/home";
import Post from "./components/post";

const App = () => {
  const { posts } = useContext(PostContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {posts.map(({ link, content }) => {
          return (
            <Route exact path={`/${link}`}>
              <Post>{React.createElement(content.Component)}</Post>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
