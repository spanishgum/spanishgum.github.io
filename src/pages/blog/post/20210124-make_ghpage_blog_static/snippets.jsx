const install = `yarn global add react-static
react-static create
`;
const installGhPages = `yarn add gh-pages
`;
const scripts = `"scripts": {
  "build": "react-static build && touch dist/.nojekyll", # modified
  "deploy": "gh-pages -t true -b master -d dist", # added
},`;
const startingStaticConfig = `export default {
  maxThreads: 1, // Remove this when you start doing any static generation
}`;
const customStaticConfig = `const posts = require("./src/blog_posts.json");

const linkedPosts = posts.map((post) => ({
  ...post,
  link: \`/blog/post/\${post.id}\`,
}));

export default {
  getRoutes: async () => {
    return [
      {
        path: "/",
        template: "src/pages/blog",
        getData: () => ({
          posts: linkedPosts,
        }),
      },
      ...linkedPosts.map((post) => ({
        path: post.link,
        template: "src/pages" + post.link,
        getData: () => ({ post }),
      })),
    ];
  },
};
`;
const blogPostsJson = `[
  {
    "id": "20210117-build_a_ghpage_blog",
    "title": "Build a github page blog with create react app"
  },
  {
    "id": "20210124-make_ghpage_blog_static",
    "title": "Build a github page blog with react-static"
  }
]`;
const appComponent = `import React from "react";
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
`;
const appComponentTrimmed = `
const App = () => {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
};

export default App;
`;

export default {
  install,
  installGhPages,
  scripts,
  startingStaticConfig,
  customStaticConfig,
  blogPostsJson,
  appComponent,
  appComponentTrimmed,
};
