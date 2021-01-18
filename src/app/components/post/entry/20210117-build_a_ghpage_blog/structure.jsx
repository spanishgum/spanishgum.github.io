import React from "react";
import { Typography } from "@material-ui/core";
import links from "./links";
import {
  Gap,
  Code,
  CodeBlock,
  FileTreeView,
  FileTreeItem,
  BulletListView,
  BulletListItem,
} from "../../../common/content";

const Structure = () => {
  return (
    <>
      <Typography>
        Now that we have our project, we need a way to structure our blog
        content. We will implement the following:
      </Typography>
      <BulletListView dense>
        <BulletListItem>
          <Typography>A common overall page layout</Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>A home component</Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>A generic post component</Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>A router so we can reach each page</Typography>
        </BulletListItem>
        <BulletListItem>
          <Typography>A context provider for posts</Typography>
        </BulletListItem>
      </BulletListView>
      <Typography>
        Below is a file hierarchy that I've worked out. I personally like when
        imports read like English, so I've chosen to break away from the typical{" "}
        {links.createReactApp} layout just a bit. If you're don't already know,
        having an <Code>index.jsx</Code> file in your folder allows you to
        import directly from the folder name.
      </Typography>
      <FileTreeView>
        <FileTreeItem text="src">
          <FileTreeItem text="app">
            <FileTreeItem text="components">
              <FileTreeItem text="common">
                <FileTreeItem text="page">
                  <FileTreeItem text="body.jsx" />
                  <FileTreeItem text="footer.jsx" />
                  <FileTreeItem text="header.jsx" />
                  <FileTreeItem text="index.jsx" />
                </FileTreeItem>
              </FileTreeItem>
              <FileTreeItem text="home">
                <FileTreeItem text="index.jsx" />
              </FileTreeItem>
              <FileTreeItem text="post">
                <FileTreeItem text="entry">
                  <FileTreeItem text="example_entry_using_folder">
                    <FileTreeItem text="index.json" />
                  </FileTreeItem>
                  <FileTreeItem text="example_entry_using_file.jsx" />
                </FileTreeItem>
                <FileTreeItem text="index.jsx" />
                <FileTreeItem text="listing.json" />
              </FileTreeItem>
            </FileTreeItem>
          </FileTreeItem>
          <FileTreeItem text="context.jsx" />
          <FileTreeItem text="index.jsx" />
          <FileTreeItem text="theme.jsx" />
        </FileTreeItem>
      </FileTreeView>
      <Typography>
        Let's start with the overall page layout. You'll notice a{" "}
        <Code>src/app/components/common/page</Code> folder. This will be where
        we define a uniform page layout so every page of your blog has a
        consistent look and feel. Start by defining empty components for each
        file in that folder. For example, here is an empty header component:
      </Typography>
      <CodeBlock language={"jsx"}>
        {`import React from "react";\n`}
        {`\n`}
        {`const Header = () => {\n`}
        {`  return <></>;\n`}
        {`}\n`}
        {`\n`}
        {`export default Header\n`}
      </CodeBlock>
      <Typography>
        Don't worry about filling in any content yet. Remember, we are only
        focused on the structure of the code right now. Details and content will
        come soon! Now that you have components filled out, lets make some
        additions to the <Code>Page</Code> component in{" "}
        <Code>src/app/components/common/page/index.jsx</Code>.
      </Typography>
      <CodeBlock language={"jsx"}>
        {`import React from "react";\n`}
        {`import { Divider } from "@material-ui/core";\n`}
        {`\n`}
        {`const Page = ({ children }) => {\n`}
        {`  return (\n`}
        {`    <>\n`}
        {`      <Header />\n`}
        {`      <Divider />\n`}
        {`      <Body>\n`}
        {`        {children}\n`}
        {`      </Body>\n`}
        {`      <Divider />\n`}
        {`      <Footer />\n`}
        {`    </>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`export default Page\n`}
      </CodeBlock>
      <Typography>
        This simple layout allows us to define every page in terms of a{" "}
        <Code>Page</Code> component, and it's children. Easy! This is probably
        the simplest form of a reusable component. But for now, lets move on.
      </Typography>
      <Gap />
      <Typography>
        Go ahead and create components for the <Code>Home</Code> and{" "}
        <Code>Post</Code> components using their respective{" "}
        <Code>index.jsx</Code> files. Each component will be defined using the{" "}
        <Code>Page</Code> component we just created!
      </Typography>
      <CodeBlock>
        {`import React from "react";\n`}
        {`import { Typography } from "@material-ui/core";\n`}
        {`\n`}
        {`const Home = () => {\n`}
        {`  return (\n`}
        {`    <Page>\n`}
        {`      <Typography>\n`}
        {`        Welcome to my blog!\n`}
        {`      </Typography>\n`}
        {`    </Page>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`export default Home\n`}
      </CodeBlock>
      <Typography>
        In this component, the <Code>Typography</Code> element is passed a child
        to the <Code>Page</Code> component. However you decide to layout your
        page is where this content will go! The <Code>Post</Code> component will
        be almost the same, however it must be generic. Have it accept a{" "}
        <Code>content</Code> prop. This prop will essentially provide a
        component that will be defined by your post entries!
      </Typography>
      <CodeBlock>
        {`import React from "react";\n`}
        {`import { Typography } from "@material-ui/core";\n`}
        {`\n`}
        {`const Post = ({ content }) => {\n`}
        {`  const { title, Component } = content;`}
        {`  return (\n`}
        {`    <Page>\n`}
        {`      <Typography>\n`}
        {`        {title}\n`}
        {`      </Typography>\n`}
        {`      <Component />\n`}
        {`    </Page>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`export default Post\n`}
      </CodeBlock>
      <Typography>
        You're probably asking where <Code>title</Code> and{" "}
        <Code>component</Code> come from. The idea behind this is that every
        post entry is a file that provides the following import:
      </Typography>
      <CodeBlock language="json">
        {`{ content: { title, description, Component } }\n`}
      </CodeBlock>
      <Typography>
        <Code>title</Code> and <Code>description</Code> are string metadata.{" "}
        <Code>Component</Code> is just a react component! Remember that we will
        keep a listing of posts in{" "}
        <Code>src/components/post/entry/listing.json</Code> and generate pages
        for them dynaimcally. This all starts in <Code>src/app/index.jsx</Code>:
      </Typography>
      <Typography></Typography>
      <CodeBlock>
        {`import React from "react";\n`}
        {`\n`}
        {`const listing = require("./components/post/listing.json");\n`}
        {`const posts = listing.map((item) => {\n`}
        {`  return { link: item, content: require(\`./components/post/entry/\${item}\`) };\n`}
        {`});`}
      </CodeBlock>
      <Typography>
        Notice that we don't actually do any error checking. In this case you
        probably don't need to. Remember, this is a personal blog, not an
        enterprise application. Spend your time generating content and don't
        overcomplicate this :)
      </Typography>
      <Gap />
      <Typography>
        Now that posts are loaded, we need to route them. Notice above that we
        simply assigned the item as the <Code>link</Code>. This means that your
        entry name (the file or folder name) will be used as the URL endpoint.
        The home page will of course get the root route (<Code>/</Code>).
      </Typography>
      <CodeBlock language={"jsx"}>
        {`import { BrowserRouter, Switch, Route } from "react-router-dom";\n`}
        {`import Home from "./components/home";\n`}
        {`import Post from "./components/post";\n`}
        {`\n`}
        {`const App = () => {\n`}
        {`  return (\n`}
        {`    <BrowserRouter>\n`}
        {`      <Switch>\n`}
        {`        <Route exact path="/">\n`}
        {`          <Home />\n`}
        {`        </Route>\n`}
        {`        {posts.map(({ link, content }) => {\n`}
        {`          return (\n`}
        {`            <Route key={link} exact path={\`/\${link}\`}>\n`}
        {`              <Post content={content} />\n`}
        {`            </Route>\n`}
        {`          );\n`}
        {`        })}\n`}
        {`      </Switch>\n`}
        {`    </BrowserRouter>\n`}
        {`  )\n`}
        {`}\n`}
        {`\n`}
        {`export default App;\n`}
      </CodeBlock>
      <Typography>
        I won't go into each component from {links.reactRouter}. Check out their
        site and read a bit about each component if you want to understand their
        framework in greater detail. At this point all you need to is create
        your first post entry! Don't forget, you will need to have the following
        export:
      </Typography>
      <CodeBlock language="json">
        {`{ content: { title, description, Component } }\n`}
      </CodeBlock>
      <Typography>
        Recall that <Code>Post</Code> was defined to take a <Code>content</Code>{" "}
        prop, and with it extract the <Code>title</Code> and{" "}
        <Code>Component</Code> elements. This means you should be able to write
        your first blog entry, and it will be reachable by its file or folder
        name! Go ahead and give it a shot! Write something in{" "}
        <Code>src/app/components/post/entry/</Code>, and visit{" "}
        <Code>localhost:3000/the_entry_name</Code>!
      </Typography>
      <Gap />
      <Typography>
        Ok your'e almost done. Now that your post architecture is complete and
        everything is routable, you need to actually link your content to your
        home page. Recall that we generated <Code>posts</Code> in the{" "}
        <Code>App</Code> component. We need to access this in the{" "}
        <Code>Home</Code> component. To do this, you could pass it down child by
        child. This is what's usually called "prop drilling". In our case it's
        not really a big deal, but in larger apps this can be a problem. We are
        going to solve this problem using a React context. What a context
        provider does, is give access to some state outside the{" "}
        <Code>props</Code> interface.
      </Typography>
      <Gap />
      <Typography>
        Start by defining the context in <Code>src/app/context.jsx</Code>:
      </Typography>
      <CodeBlock>
        {`import React from "react";\n`}
        {`\n`}
        {`const AppContext = React.createContext();\n`}
        {`export default AppContext;\n`}
      </CodeBlock>
      <Typography>
        Seriously, that's it! Next, we are going to revisit out <Code>App</Code>{" "}
        component. Go back and import the context, then wrap the return code as
        follows:
      </Typography>
      <CodeBlock language={"jsx"}>
        {`import AppContext "./context";\n`}
        {`...\n`}
        {`\n`}
        {`const App = () => {\n`}
        {`  return (\n`}
        {`    <AppContext.Provider value={{ posts }}>\n`}
        {`     ...\n`}
        {`    </AppContext.Provider>\n`}
        {`  )\n`}
        {`}\n`}
        {`\n`}
        {`...\n`}
      </CodeBlock>
      <Typography>
        Now every child that exists beneath the provider will have the context
        made available to them, without the prop drilling!
      </Typography>
      <Gap />
      <Typography>
        So lets revist our <Code>Home</Code> component, and use the react
        context hook <Code>useContext</Code>.
      </Typography>
      <CodeBlock language={"jsx"}>
        {`import React, { useContext } from "react";\n`}
        {`import AppContext from "../../context";\n`}
        {`...\n`}
        {`\n`}
        {`const Home = () => {\n`}
        {`  const { posts } = useContext(AppContext)\n`}
        {`  return (\n`}
        {`    ...\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`...\n`}
      </CodeBlock>
      <Typography>
        Excellent, with <Code>useContext</Code>, you can easily access your{" "}
        <Code>posts</Code> anywhere in your application! At this point, it's
        entirely up to you how you want to showcase your posts. I've used the{" "}
        {links.materialUI} <Code>Grid</Code> component, and a simple{" "}
        <Code>Card</Code> component which I've defined. It's a work in progress,
        but all of the mechanics are here!
      </Typography>
      <CodeBlock language={"jsx"}>
        {`<Page>\n`}
        {`  <Grid container>\n`}
        {`    {posts.map((post) => (\n`}
        {`      <Grid\n`}
        {`        item\n`}
        {`        key={post.link}\n`}
        {`        className={gridStyle}\n`}
        {`        xs={12}\n`}
        {`        md={6}\n`}
        {`        lg={4}\n`}
        {`        xl={3}\n`}
        {`      >\n`}
        {`        <Card post={post} />\n`}
        {`      </Grid>\n`}
        {`    ))}\n`}
        {`  </Grid>\n`}
        {`</Page>\n`}
      </CodeBlock>
      <Typography>
        Well that pretty much covers everything. At this point, you can go back
        and start and adding some sex appeal to your components! Be sure to
        check out all {links.materialUI} has to offer. It is a great framework
        with so many simple to use components. If you're feeling adventurous,
        try out a few different ones and see what each has to offer!
      </Typography>
      <Gap />
      <Typography>Cheers</Typography>
    </>
  );
};

export default Structure;
