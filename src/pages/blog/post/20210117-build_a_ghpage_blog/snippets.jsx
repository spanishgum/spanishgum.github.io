const dependencies = `npx create-react-app $GITHUB_USERNAME.github.io
cd $GITHUB_USERNAME.github.io
yarn add gh-pages            # manage pushing to github

# Below are optional, choose what you want to use
yarn add @material-ui/core   # core design components
yarn add @material-ui/styles # theming
yarn add @material-ui/icons  # simple icons 
yarn add @material-ui/lab    # experimental componments`;

const scripts = `"scripts": {
  "deploy": "gh-pages -b master -d build",
}`;

const publish = `yarn build
yarn deploy`;

const header = `// src/app/components/common/page/header.jsx

import React from "react";

const Header = () => {
  return <></>;
}

export default Header`;

const pageIndex = `// src/app/components/common/page/index.jsx

import React from "react";
import { Divider } from "@material-ui/core";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <Divider />
      <Body>
        {children}
      </Body>
      <Divider />
      <Footer />
    </>
  );
}

export default Page;`;

const homeIndex = `// src/app/components/home/index.jsx

import React from "react";
import { Text } from "@material-ui/core";

const Home = () => {
  return (
    <Page>
      <Text>
        Welcome to my blog!
      </Text>
    </Page>
  );
}

export default Home;`;

const postIndex = `// src/app/components/post/index.jsx

import React from "react";
import { Text } from "@material-ui/core";

const Post = ({ post }) => {
  return (
    <Page>
      <Text>
        {post}
      </Text>
      <Component />
    </Page>
  );
}

export default Post;`;

const postExport = `export default { content: { title, Component } };`;

const appIndexShort = `// src/app/index.jsx

import React from "react";

const listing = require("./components/post/listing.json");
const posts = Object.fromEntries(
  listing.map((item) => {
    return [item, require(\`./components/post/entry/\${item}\`)];
  })
)`;

const appIndexComplete = `// src/app/index.jsx

import React from "react";
import Home from "./components/home";
import Post from "./components/post";

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const post = params.get("post");

  return (
    <>
      {post ? <Post post={post} /> : <Home />}
    </>
  )
}

export default App;`;

const newEntry = `// src/app/components/post/entry/new_entry.jsx

import React from "react";

const title = "Hello, World!";
const Component = () => {

  return (
    <Text>
      Welcome to my first blog post!
    <Text/>
  )
}

const content = { title, Component }
export default content;`;

const createContext = `// src/app/context.jsx

import React from "react";

const AppContext = React.createContext();
export default AppContext;`;

const appIndexContext = `// src/app/index.jsx

import AppContext "./context";
// ...

const App = () => {
  return (
    <AppContext.Provider value={{ posts }}>
      {/*...*/}
    </AppContext.Provider>
  )
}

// ...`;

const homeIndexContext = `// src/app/components/home/index.jsx

import React, { useContext } from "react";
import AppContext from "../../context";
import { Grid } from "@material-ui/core";
import Card from "./card"; // define this how you like

const Home = () => {
  const { posts } = useContext(AppContext)
  return (
    <Page>
      <Grid container>
        {posts.map((post) => (
          <Grid
            item
            key={post.link}
            className={gridStyle}
            xs={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card post={post} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

// ...`;

const postIndexContext = `// src/app/components/post/index.jsx

import React, { useContext } from "react";
import { Text } from "@material-ui/core";
import AppContext from "../../context";

const Post = ({ post }) => {
  const { posts } = useContext(AppContext)
  const { title, Component } = posts[post];
  return (
    <Page>
      <Text>
        {title}
      </Text>
      <Component />
    </Page>
  );
}

export default Post;`;

export default {
  dependencies,
  scripts,
  publish,
  header,
  pageIndex,
  homeIndex,
  postIndex,
  postExport,
  appIndexShort,
  appIndexComplete,
  newEntry,
  createContext,
  appIndexContext,
  homeIndexContext,
  postIndexContext,
};
