import React from "react";
import snippets from "./snippets";
import { Gap, Code, CodeBlock, Text, FileTree } from "components/content";
import links from "./links";

const Configuration = () => {
  return (
    <>
      <Text>
        Once you have the <Code>blank</Code> template ready, go ahead and take a
        look at <Code>static.config.js</Code>. You should have something like
        this to start:
      </Text>
      <CodeBlock language={"jsx"}>{snippets.startingStaticConfig}</CodeBlock>
      <Text>We are going to remove everything and start with this:</Text>
      <CodeBlock language={"jsx"}>{snippets.customStaticConfig}</CodeBlock>
      <Text>
        In my previous post, I used a <Code>listing.json</Code> to store a
        mapping of every blog post. This takes a very similar approach, using{" "}
        <Code>src/blog_posts.json</Code>. Your listing should look something
        like this:
      </Text>
      <CodeBlock language={"json"}>{snippets.blogPostsJson}</CodeBlock>
      <Text>
        This should look familiar, i.e. it is from my blog! So what's going on
        here? At the top of <Code>static.config.js</Code> we created{" "}
        <Code>linkedPosts</Code> which basically adds a <Code>link</Code>{" "}
        attribute to each json object. I've chosen to use{" "}
        <Code>{`/blog/post/$\{post.id}`}</Code> as my post slug, and I mirror
        this structure under <Code>src/</Code>. Like in my previous post, I've
        chosen to have every post be a folder containing an{" "}
        <Code>index.jsx</Code>. This allows me to break up my posts into
        separate modules to be easier to edit. For example, at the time of
        writing this, I have this folder structure:
      </Text>
      <FileTree
        data={{
          name: "src",
          children: [
            {
              name: "blog",
              children: [
                {
                  name: "post",
                  children: [
                    {
                      name: "20210117-build_a_ghpage_blog",
                      children: [
                        {
                          name: "implementation.jsx",
                        },
                        {
                          name: "index.jsx",
                        },
                        {
                          name: "links.jsx",
                        },
                        {
                          name: "overview.jsx",
                        },
                      ],
                    },
                    {
                      name: "20210124-make_ghpage_blog_static",
                      children: [
                        {
                          name: "implementation.jsx",
                        },
                        {
                          name: "index.jsx",
                        },
                        {
                          name: "links.jsx",
                        },
                        {
                          name: "overview.jsx",
                        },
                        {
                          name: "setup.jsx",
                        },
                        {
                          name: "snippets.jsx",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }}
      />
      <Text>
        There is one caveat to this structure and it's related to the{" "}
        <Code>template</Code> key in the <Code>static.config.js</Code>. But we
        will come back to that. First, let's talk about <Code>getRoutes</Code>{" "}
        and <Code>getData</Code>.
      </Text>
      <Gap />
      <Text>
        <Code>getRoutes</Code> is a critical component that defines our static
        routes. This is how <Code>{links.reactStatic}</Code> decideds what{" "}
        <Code>index.html</Code> files to build. Remember that in a static site
        like github pages, each request to <Code>/some/path</Code> needs to have
        a corresponding <Code>index.html</Code> file. With{" "}
        <Code>{links.createReactApp}</Code>, you only get the root because of
        how <Code>{links.webpack}</Code> is configured. So{" "}
        <Code>{links.reactStatic}</Code> kind of acts like a transparent tool
        for configuring <Code>{links.webpack}</Code>! There is obviously more to
        it that that, but if you've never touched <Code>{links.webpack}</Code>{" "}
        before, this takes you one step closer. Neat!
      </Text>
      <Gap />
      <Text>
        <Code>getData</Code> isn't actually necessary in general. This sets up a
        hook to provide data to the components defined by the template key. This
        allows you to define generic templates so that you can render multiple
        pages with the same template, but different data. In your template
        components, you would use the provided hook <Code>useRouteData()</Code>{" "}
        to access whats returned by these functions.
      </Text>
      <Gap />
      <Text>
        If you looked at the <Code>basic</Code> boilerplate template, you may
        have noticed that every blog post was actually rendered by a single
        template file. This works great if you can come up with a well known
        format for the data that will drive every blog post. In my case, I
        wanted every post to be free from limitation, so I opted for a unique
        template for every post.
      </Text>
      <Gap />
      <Text>
        Ok, so above I mentioned a caveat. Here goes. If you poked around at
        some other examples online, you may have found a plugin that you can add
        to <Code>static.config.js</Code> called{" "}
        <Code>{links.reactStaticPluginFilesystem}</Code>. Basically this creates
        a recursive mapping for a directory, generating a <Code>path</Code> and{" "}
        <Code>template</Code> for each file found, and adds them to{" "}
        <Code>getRoutes</Code>. This is actually awesome and a great quick
        starter. However (the caveat), there is no way to filter out certain
        files. Since I broke out my posts into separate smaller components in
        separate files, each one would be compiled. This caused build errors for
        files that did not default export a react component. That said, if you
        are looking for a simple blog structure, perhaps you will find this
        useful!
      </Text>
    </>
  );
};

export default Configuration;
