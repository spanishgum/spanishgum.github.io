import React from "react";
import links from "./links";
import {
  Code,
  CodeBlock,
  FileTree,
  BulletListView,
  BulletListItem,
  Text,
} from "components/content";

const Implementation = () => {
  return (
    <>
      <Text>
        Now that we have our project, we need a way to structure our blog
        content. We will implement the following:
      </Text>
      <BulletListView>
        <BulletListItem>
          <Text>A common overall page layout</Text>
        </BulletListItem>
        <BulletListItem>
          <Text>A home component</Text>
        </BulletListItem>
        <BulletListItem>
          <Text>A generic post component</Text>
        </BulletListItem>
        <BulletListItem>
          <Text>A way to dynamically render specific posts</Text>
        </BulletListItem>
        <BulletListItem>
          <Text>A context provider for posts</Text>
        </BulletListItem>
      </BulletListView>
      <Text>
        Below is a file hierarchy that I've worked out. I personally like when
        imports read like English, so I've chosen to break away from the typical{" "}
        {links.createReactApp} layout just a bit. If you're don't already know,
        having an <Code>index.jsx</Code> file in your folder allows you to
        import directly from the folder name.
      </Text>
      <FileTree
        data={{
          name: "src",
          children: [
            {
              name: "app",
              children: [
                {
                  name: "components",
                  children: [
                    {
                      name: "common",
                      children: [
                        {
                          name: "page",
                          children: [
                            {
                              name: "body.jsx",
                            },
                            {
                              name: "footer.jsx",
                            },
                            {
                              name: "header.jsx",
                            },
                            {
                              name: "index.jsx",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "home",
                      children: [
                        {
                          name: "index.jsx",
                        },
                      ],
                    },
                    {
                      name: "post",
                      children: [
                        {
                          name: "entry",
                          children: [
                            {
                              name: "example_entry_using_folder",
                              children: [
                                {
                                  name: "index.jsx",
                                },
                              ],
                            },
                            {
                              name: "example_entry_using_file.jsx",
                            },
                          ],
                        },
                        {
                          name: "index.jsx",
                        },
                        {
                          name: "listing.json",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "context.jsx",
            },
            {
              name: "index.jsx",
            },
            {
              name: "theme.jsx",
            },
          ],
        }}
      />
      <Text>
        Let's start with the overall page layout. You'll notice a{" "}
        <Code>src/app/components/common/page</Code> folder. This will be where
        we define a uniform page layout so every page of your blog has a
        consistent look and feel. Start by defining empty components for each
        file in that folder. For example, here is an empty header component:
      </Text>
      <CodeBlock language={"jsx"}>
        {`// src/app/components/common/page/header.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`\n`}
        {`const Header = () => {\n`}
        {`  return <></>;\n`}
        {`}\n`}
        {`\n`}
        {`export default Header\n`}
      </CodeBlock>
      <Text>
        Don't worry about filling in content yet. For now, focus on the
        structure of the code. Lets take a look at the <Code>Page</Code>{" "}
        component in <Code>src/app/components/common/page/index.jsx</Code>.
      </Text>
      <CodeBlock language={"jsx"}>
        {`// src/app/components/common/page/index.jsx\n`}
        {`\n`}
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
      <Text>
        This layout allows us to define every page in terms of a{" "}
        <Code>Page</Code> component. Any children will be forwarded down into
        the <Code>Body</Code> component. This will give us a consistent look and
        feel. Great!
      </Text>
      <Text>
        Go ahead and create components for the <Code>Home</Code> and{" "}
        <Code>Post</Code> components using their respective{" "}
        <Code>index.jsx</Code> files. Each component will be defined using the{" "}
        <Code>Page</Code> component we just created.
      </Text>
      <CodeBlock>
        {`// src/app/components/home/index.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`import { Text } from "@material-ui/core";\n`}
        {`\n`}
        {`const Home = () => {\n`}
        {`  return (\n`}
        {`    <Page>\n`}
        {`      <Text>\n`}
        {`        Welcome to my blog!\n`}
        {`      </Text>\n`}
        {`    </Page>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`export default Home\n`}
      </CodeBlock>
      <Text>
        In the <Code>Home</Code> component, I've used <Code>Text</Code> as a
        placeholder. We will come back to it later. For the <Code>Post</Code>{" "}
        component, have it accept a <Code>post</Code> prop. For now this will be
        a key to access our post data. We will come back to this below to show
        how we will access the actual post content.
      </Text>
      <CodeBlock>
        {`// src/app/components/post/index.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`import { Text } from "@material-ui/core";\n`}
        {`\n`}
        {`const Post = ({ post }) => {\n`}
        {`  return (\n`}
        {`    <Page>\n`}
        {`      <Text>\n`}
        {`        {post}\n`}
        {`      </Text>\n`}
        {`      <Component />\n`}
        {`    </Page>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`export default Post\n`}
      </CodeBlock>
      <Text>
        In my blog, I've decided that content will include a <Code>title</Code>{" "}
        string, and a React <Code>component</Code>. This means every I write
        will export the following:
      </Text>
      <CodeBlock language="json">
        {`{ content: { title, Component } }\n`}
      </CodeBlock>
      <Text>
        We will keep a listing of posts in{" "}
        <Code>src/components/post/entry/listing.json</Code> and generate pages
        for them dynamically. The listing will simply be an array with the name
        of every entry. Each time you add an entry, remember to modify this
        file. With a listing in place, lets see how we can import this in{" "}
        <Code>src/app/index.jsx</Code>:
      </Text>
      <CodeBlock>
        {`// src/app/index.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`\n`}
        {`const listing = require("./components/post/listing.json");\n`}
        {`const posts = Object.fromEntries(\n`}
        {`  listing.map((item) => {\n`}
        {`    return [item, require(\`./components/post/entry/\${item}\`)];\n`}
        {`  })\n`}
        {`);`}
      </CodeBlock>
      <Text>
        This will create a mapping of the names of posts to their content. Now
        that posts are loaded, we need a way to render the correct content.
        Since this is a static site, every page will use <Code>/</Code>. If we
        wanted to render routes at different endpoints, we would have to
        generate html resources for these. I believe {links.reactStatic} can do
        this, but I have't tried this tool yet. Instead, what we will do is use
        a URL query parameter!
      </Text>
      <CodeBlock language={"jsx"}>
        {`// src/app/index.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`import Home from "./components/home";\n`}
        {`import Post from "./components/post";\n`}
        {`\n`}
        {`const App = () => {\n`}
        {`  const params = new URLSearchParams(window.location.search);\n`}
        {`  const post = params.get("post");\n`}
        {`\n`}
        {`  return (\n`}
        {`    <>\n`}
        {`      {post ? <Post post={post} /> : <Home />}\n`}
        {`    </>\n`}
        {`  )\n`}
        {`}\n`}
        {`\n`}
        {`export default App;\n`}
      </CodeBlock>
      <Text>
        At this point all you need to is create your first post entry! Don't
        forget, you will need to export a content object. This can be as simple
        as this:
      </Text>
      <CodeBlock language="jsx">
        {`// src/app/components/post/entry/new_entry.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`\n`}
        {`const title = "Hello, World!";\n`}
        {`const Component = () => {\n`}
        {`\n`}
        {`  return (\n`}
        {`    <Text>\n`}
        {`      Welcome to my first blog post!\n`}
        {`    <Text/>\n`}
        {`  )\n`}
        {`}\n`}
        {`\n`}
        {`const content = { title, Component }\n`}
        {`export default content;\n`}
      </CodeBlock>
      <Text>
        Ok, almost done. Recall that we only passed the URL parameter{" "}
        <Code>post</Code> as a prop to the <Code>Post</Code> component in{" "}
        <Code>App</Code>. Obviously this is only a string, not the actual
        content from the post entry. One thing we could do is load the component
        from the <Code>posts</Code> table we created in <Code>App</Code>. While
        this would be perfectly acceptable in this case, I'm going to show you
        how we can use a react context.
      </Text>
      <Text>
        Start by defining the context in <Code>src/app/context.jsx</Code>:
      </Text>
      <CodeBlock>
        {`// src/app/context.jsx\n`}
        {`\n`}
        {`import React from "react";\n`}
        {`\n`}
        {`const AppContext = React.createContext();\n`}
        {`export default AppContext;\n`}
      </CodeBlock>
      <Text>
        Next, lets revisit out <Code>App</Code> component. Go back and import
        the context, then wrap the return code with a provider as follows:
      </Text>
      <CodeBlock language={"jsx"}>
        {`// src/app/index.jsx\n`}
        {`\n`}
        {`import AppContext "./context";\n`}
        {`// ...\n`}
        {`\n`}
        {`const App = () => {\n`}
        {`  return (\n`}
        {`    <AppContext.Provider value={{ posts }}>\n`}
        {`      {/*...*/}\n`}
        {`    </AppContext.Provider>\n`}
        {`  )\n`}
        {`}\n`}
        {`\n`}
        {`// ...\n`}
      </CodeBlock>
      <Text>
        Now every component that exists "beneath" the provider will have the
        context made available to them!
      </Text>
      <Text>
        So lets revist our <Code>Home</Code> component, and use the react
        context hook <Code>useContext</Code>. This will give you access to every
        post! It's up to you on how you wish to showcase them. I've used the{" "}
        {links.materialUI} <Code>Grid</Code> component and a custom{" "}
        <Code>Card</Code> component.
      </Text>
      <CodeBlock language={"jsx"}>
        {`// src/app/components/home/index.jsx\n`}
        {`\n`}
        {`import React, { useContext } from "react";\n`}
        {`import AppContext from "../../context";\n`}
        {`import { Grid } from "@material-ui/core";\n`}
        {`import Card from "./card"; // define this how you like\n`}
        {`\n`}
        {`const Home = () => {\n`}
        {`  const { posts } = useContext(AppContext)\n`}
        {`  return (\n`}
        {`    <Page>\n`}
        {`      <Grid container>\n`}
        {`        {posts.map((post) => (\n`}
        {`          <Grid\n`}
        {`            item\n`}
        {`            key={post.link}\n`}
        {`            className={gridStyle}\n`}
        {`            xs={12}\n`}
        {`            md={6}\n`}
        {`            lg={4}\n`}
        {`            xl={3}\n`}
        {`          >\n`}
        {`            <Card post={post} />\n`}
        {`          </Grid>\n`}
        {`        ))}\n`}
        {`      </Grid>\n`}
        {`    </Page>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`// ...\n`}
      </CodeBlock>
      <Text>
        Lets also revist our <Code>Post</Code> component. Recall that we passed
        a <Code>post</Code> key as a prop. We can now use that key to get the
        content!
      </Text>
      <CodeBlock language={"jsx"}>
        {`// src/app/components/post/index.jsx\n`}
        {`\n`}
        {`import React, { useContext } from "react";\n`}
        {`import { Text } from "@material-ui/core";\n`}
        {`import AppContext from "../../context";\n`}
        {`\n`}
        {`const Post = ({ post }) => {\n`}
        {`  const { posts } = useContext(AppContext)\n`}
        {`  const { title, Component } = posts[post];\n`}
        {`  return (\n`}
        {`    <Page>\n`}
        {`      <Text>\n`}
        {`        {title}\n`}
        {`      </Text>\n`}
        {`      <Component />\n`}
        {`    </Page>\n`}
        {`  );\n`}
        {`}\n`}
        {`\n`}
        {`export default Post\n`}
      </CodeBlock>
      <Text>
        Well that pretty much covers everything! At this point, you should
        consider creating reusable components for every post you make. For
        example, the check lists, code blocks, and file hierarchy you see on
        this page are components I've added to{" "}
        <Code>src/app/components/common/content</Code>. All that's left is
        adding sex appeal to your blog! Happy coding!
      </Text>
      <Text>Cheers</Text>
    </>
  );
};

export default Implementation;
