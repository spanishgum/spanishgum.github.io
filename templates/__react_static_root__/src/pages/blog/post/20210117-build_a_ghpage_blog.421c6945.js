(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(175);t.a=function(e){var t=e.href,n=e.children;return o.a.createElement(l.a,{href:t,color:"secondary"},n)}},182:function(e,t,n){"use strict";n.d(t,"g",(function(){return I})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return k})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return S})),n.d(t,"h",(function(){return U})),n.d(t,"i",(function(){return W}));var a=n(15),o=n.n(a),l=n(0),r=n.n(l),c=n(179),i=n(200),s=n(206),m=n(207),u=n(208),p=n(210),d=n(176),h=Object(d.a)((function(e){return{bulletListBoxStyle:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}})),g=function(e){var t=e.children,n=h().bulletListBoxStyle;return r.a.createElement(c.a,{className:n},r.a.createElement(i.a,null,r.a.createElement(s.a,{dense:!0},t)))},E=function(e){var t=e.children,n=Object(l.useState)(!1),a=o()(n,2),c=a[0],i=a[1];return r.a.createElement(m.a,null,r.a.createElement(u.a,{onClick:function(){i((function(e){return!e}))}},r.a.createElement(p.a,{checked:c,disableRipple:!0})),t)},x=n(209),f=n(211),y=n(192),w=n.n(y),b=n(194),v=n.n(b),j=Object(d.a)((function(e){return{fileTreeBoxStyle:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}})),k=function(e){var t=e.children,n=j().fileTreeBoxStyle;return r.a.createElement(c.a,{className:n},r.a.createElement(i.a,null,r.a.createElement(x.a,{defaultCollapseIcon:r.a.createElement(w.a,null),defaultExpandIcon:r.a.createElement(v.a,null)},t)))},A=function(e){var t=e.text,n=e.children;return r.a.createElement(f.a,{nodeId:t,label:t},n)},T=Object(d.a)((function(e){return{gapBoxStyle:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}})),I=function(){var e=T().gapBoxStyle;return r.a.createElement(c.a,{className:e})},R=function(e){var t=e.language,n=e.children;return r.a.createElement("code",{className:t},n)},B=n(195),P=n.n(B);n(196);P.a.initHighlightingOnLoad();var C=Object(d.a)((function(e){return{codeBlockBoxStyle:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}})),S=function(e){var t=e.language,n=e.children,a=Object(l.useRef)(),o=C().codeBlockBoxStyle;return Object(l.useEffect)((function(){a.current&&P.a.highlightBlock(a.current)}),[]),r.a.createElement(c.a,{className:o},r.a.createElement("pre",{ref:a},r.a.createElement("code",{className:t},n)))},N=n(165),H=n(177),O=Object(d.a)((function(e){return{headingBoxStyle:{paddingTop:e.spacing(2)},childrenBoxStyle:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)}}})),U=function(e){var t=e.heading,n=e.children,a=O(),o=a.headingBoxStyle,l=a.childrenBoxStyle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:o},r.a.createElement(N.a,{variant:"h5"},t)),r.a.createElement(c.a,{className:l},n),r.a.createElement(H.a,null))},W=(n(181),function(e){var t=e.children;return r.a.createElement(N.a,null,t)})},86:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(182),r=n(181),c={createReactApp:o.a.createElement(r.a,{href:"https://reactjs.org/docs/create-a-new-react-app.html"},"create-react-app"),ghPages:o.a.createElement(r.a,{href:"https://www.npmjs.com/package/gh-pages"},"gh-pages"),materialUI:o.a.createElement(r.a,{href:"https://material-ui.com/"},"Material-UI"),reactRouter:o.a.createElement(r.a,{href:"https://reactrouter.com/"},"React Router"),reactStatic:o.a.createElement(r.a,{href:"https://github.com/react-static/react-static"},"react-static")},i=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.i,null,"To build a github page using react, we will use ",c.createReactApp,","," ",c.ghPages,", and ",c.materialUI,". Some things to keep in mind:"),o.a.createElement(l.b,null,o.a.createElement(l.a,null,o.a.createElement(l.i,null,"A github page is a static site")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"An ",o.a.createElement(l.c,null,"index.html")," must exist at the root of the repository")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"All resource paths are relative the root of the repository")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"Your repository must be named"," ",o.a.createElement(l.c,null,"<your-github-username>.github.io")))),o.a.createElement(l.i,null,"Because a static site is required, requests to"," ",o.a.createElement(l.c,null,"/some_endpoint")," will only be successful if a resource with that name exists. You could use something like ",c.reactRouter," and the development server to respond to arbitrary requests, but that will not work in this scenario. While tools exist to support building static sites, we are going to stick to using plain ",c.createReactApp," with the single index file it generates."),o.a.createElement(l.g,null),o.a.createElement(l.i,null,"Start by creating your react app and installing dependencies mentioned. Note that you don't have to use ",c.materialUI,". I will throughout this post to provide some basic page elements. Feel free to ignore them and find/build your own compnoents."),o.a.createElement(l.d,{language:"bash"},"npx create-react-app $GITHUB_USERNAME.github.io\n","cd $GITHUB_USERNAME.github.io\n","yarn add gh-pages            # manage pushing to github\n","\n# Below are optional, choose what you want to use\n","yarn add @material-ui/core   # core design components\n","yarn add @material-ui/styles # theming\n","yarn add @material-ui/icons  # simple icons \n","yarn add @material-ui/lab    # experimental componments"),o.a.createElement(l.i,null,"Next, you should add a script to your ",o.a.createElement(l.c,null,"package.json")," for quick deployment:"),o.a.createElement(l.d,{language:"json"},'"scripts": {\n','  "deploy": "gh-pages -b master -d build",\n',"}"),o.a.createElement(l.i,null,"Now every time you want to publish your site, you can run this:"),o.a.createElement(l.d,{language:"bash"},"yarn build\n","yarn deploy"),o.a.createElement(l.i,null,"You may also want to ignore the ",o.a.createElement(l.c,null,"build")," directory in your"," ",o.a.createElement(l.c,null,".gitignore"),"."))},s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.i,null,"Now that we have our project, we need a way to structure our blog content. We will implement the following:"),o.a.createElement(l.b,null,o.a.createElement(l.a,null,o.a.createElement(l.i,null,"A common overall page layout")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"A home component")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"A generic post component")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"A way to dynamically render specific posts")),o.a.createElement(l.a,null,o.a.createElement(l.i,null,"A context provider for posts"))),o.a.createElement(l.i,null,"Below is a file hierarchy that I've worked out. I personally like when imports read like English, so I've chosen to break away from the typical"," ",c.createReactApp," layout just a bit. If you're don't already know, having an ",o.a.createElement(l.c,null,"index.jsx")," file in your folder allows you to import directly from the folder name."),o.a.createElement(l.f,null,o.a.createElement(l.e,{text:"src"},o.a.createElement(l.e,{text:"app"},o.a.createElement(l.e,{text:"components"},o.a.createElement(l.e,{text:"common"},o.a.createElement(l.e,{text:"page"},o.a.createElement(l.e,{text:"body.jsx"}),o.a.createElement(l.e,{text:"footer.jsx"}),o.a.createElement(l.e,{text:"header.jsx"}),o.a.createElement(l.e,{text:"index.jsx"}))),o.a.createElement(l.e,{text:"home"},o.a.createElement(l.e,{text:"index.jsx"})),o.a.createElement(l.e,{text:"post"},o.a.createElement(l.e,{text:"entry"},o.a.createElement(l.e,{text:"example_entry_using_folder"},o.a.createElement(l.e,{text:"index.json"})),o.a.createElement(l.e,{text:"example_entry_using_file.jsx"})),o.a.createElement(l.e,{text:"index.jsx"}),o.a.createElement(l.e,{text:"listing.json"})))),o.a.createElement(l.e,{text:"context.jsx"}),o.a.createElement(l.e,{text:"index.jsx"}),o.a.createElement(l.e,{text:"theme.jsx"}))),o.a.createElement(l.i,null,"Let's start with the overall page layout. You'll notice a"," ",o.a.createElement(l.c,null,"src/app/components/common/page")," folder. This will be where we define a uniform page layout so every page of your blog has a consistent look and feel. Start by defining empty components for each file in that folder. For example, here is an empty header component:"),o.a.createElement(l.d,{language:"jsx"},"// src/app/components/common/page/header.jsx\n","\n",'import React from "react";\n',"\n","const Header = () => {\n","  return <></>;\n","}\n","\n","export default Header\n"),o.a.createElement(l.i,null,"Don't worry about filling in content yet. For now, focus on the structure of the code. Lets take a look at the ",o.a.createElement(l.c,null,"Page")," ","component in ",o.a.createElement(l.c,null,"src/app/components/common/page/index.jsx"),"."),o.a.createElement(l.d,{language:"jsx"},"// src/app/components/common/page/index.jsx\n","\n",'import React from "react";\n','import { Divider } from "@material-ui/core";\n',"\n","const Page = ({ children }) => {\n","  return (\n","    <>\n","      <Header />\n","      <Divider />\n","      <Body>\n","        {children}\n","      </Body>\n","      <Divider />\n","      <Footer />\n","    </>\n","  );\n","}\n","\n","export default Page\n"),o.a.createElement(l.i,null,"This layout allows us to define every page in terms of a"," ",o.a.createElement(l.c,null,"Page")," component. Any children will be forwarded down into the ",o.a.createElement(l.c,null,"Body")," component. This will give us a consistent look and feel. Great!"),o.a.createElement(l.g,null),o.a.createElement(l.i,null,"Go ahead and create components for the ",o.a.createElement(l.c,null,"Home")," and"," ",o.a.createElement(l.c,null,"Post")," components using their respective"," ",o.a.createElement(l.c,null,"index.jsx")," files. Each component will be defined using the"," ",o.a.createElement(l.c,null,"Page")," component we just created."),o.a.createElement(l.d,null,"// src/app/components/home/index.jsx\n","\n",'import React from "react";\n','import { Text } from "@material-ui/core";\n',"\n","const Home = () => {\n","  return (\n","    <Page>\n","      <Text>\n","        Welcome to my blog!\n","      </Text>\n","    </Page>\n","  );\n","}\n","\n","export default Home\n"),o.a.createElement(l.i,null,"In the ",o.a.createElement(l.c,null,"Home")," component, I've used ",o.a.createElement(l.c,null,"Text")," as a placeholder. We will come back to it later. For the ",o.a.createElement(l.c,null,"Post")," ","component, have it accept a ",o.a.createElement(l.c,null,"post")," prop. For now this will be a key to access our post data. We will come back to this below to show how we will access the actual post content."),o.a.createElement(l.d,null,"// src/app/components/post/index.jsx\n","\n",'import React from "react";\n','import { Text } from "@material-ui/core";\n',"\n","const Post = ({ post }) => {\n","  return (\n","    <Page>\n","      <Text>\n","        {post}\n","      </Text>\n","      <Component />\n","    </Page>\n","  );\n","}\n","\n","export default Post\n"),o.a.createElement(l.i,null,"In my blog, I've decided that content will include a ",o.a.createElement(l.c,null,"title")," ","string, and a React ",o.a.createElement(l.c,null,"component"),". This means every I write will export the following:"),o.a.createElement(l.d,{language:"json"},"{ content: { title, Component } }\n"),o.a.createElement(l.i,null,"We will keep a listing of posts in"," ",o.a.createElement(l.c,null,"src/components/post/entry/listing.json")," and generate pages for them dynamically. The listing will simply be an array with the name of every entry. Each time you add an entry, remember to modify this file. With a listing in place, lets see how we can import this in"," ",o.a.createElement(l.c,null,"src/app/index.jsx"),":"),o.a.createElement(l.d,null,"// src/app/index.jsx\n","\n",'import React from "react";\n',"\n",'const listing = require("./components/post/listing.json");\n',"const posts = Object.fromEntries(\n","  listing.map((item) => {\n","    return [item, require(`./components/post/entry/${item}`)];\n","  })\n",");"),o.a.createElement(l.i,null,"This will create a mapping of the names of posts to their content. Now that posts are loaded, we need a way to render the correct content. Since this is a static site, every page will use ",o.a.createElement(l.c,null,"/"),". If we wanted to render routes at different endpoints, we would have to generate html resources for these. I believe ",c.reactStatic," can do this, but I have't tried this tool yet. Instead, what we will do is use a URL query parameter!"),o.a.createElement(l.d,{language:"jsx"},"// src/app/index.jsx\n","\n",'import React from "react";\n','import Home from "./components/home";\n','import Post from "./components/post";\n',"\n","const App = () => {\n","  const params = new URLSearchParams(window.location.search);\n",'  const post = params.get("post");\n',"\n","  return (\n","    <>\n","      {post ? <Post post={post} /> : <Home />}\n","    </>\n","  )\n","}\n","\n","export default App;\n"),o.a.createElement(l.i,null,"At this point all you need to is create your first post entry! Don't forget, you will need to export a content object. This can be as simple as this:"),o.a.createElement(l.d,{language:"jsx"},"// src/app/components/post/entry/new_entry.jsx\n","\n",'import React from "react";\n',"\n",'const title = "Hello, World!";\n',"const Component = () => {\n","\n","  return (\n","    <Text>\n","      Welcome to my first blog post!\n","    <Text/>\n","  )\n","}\n","\n","const content = { title, Component }\n","export default content;\n"),o.a.createElement(l.g,null),o.a.createElement(l.i,null,"Ok, almost done. Recall that we only passed the URL parameter"," ",o.a.createElement(l.c,null,"post")," as a prop to the ",o.a.createElement(l.c,null,"Post")," component in"," ",o.a.createElement(l.c,null,"App"),". Obviously this is only a string, not the actual content from the post entry. One thing we could do is load the component from the ",o.a.createElement(l.c,null,"posts")," table we created in ",o.a.createElement(l.c,null,"App"),". While this would be perfectly acceptable in this case, I'm going to show you how we can use a react context."),o.a.createElement(l.g,null),o.a.createElement(l.i,null,"Start by defining the context in ",o.a.createElement(l.c,null,"src/app/context.jsx"),":"),o.a.createElement(l.d,null,"// src/app/context.jsx\n","\n",'import React from "react";\n',"\n","const AppContext = React.createContext();\n","export default AppContext;\n"),o.a.createElement(l.i,null,"Next, lets revisit out ",o.a.createElement(l.c,null,"App")," component. Go back and import the context, then wrap the return code with a provider as follows:"),o.a.createElement(l.d,{language:"jsx"},"// src/app/index.jsx\n","\n",'import AppContext "./context";\n',"// ...\n","\n","const App = () => {\n","  return (\n","    <AppContext.Provider value={{ posts }}>\n","      {/*...*/}\n","    </AppContext.Provider>\n","  )\n","}\n","\n","// ...\n"),o.a.createElement(l.i,null,'Now every component that exists "beneath" the provider will have the context made available to them!'),o.a.createElement(l.g,null),o.a.createElement(l.i,null,"So lets revist our ",o.a.createElement(l.c,null,"Home")," component, and use the react context hook ",o.a.createElement(l.c,null,"useContext"),". This will give you access to every post! It's up to you on how you wish to showcase them. I've used the"," ",c.materialUI," ",o.a.createElement(l.c,null,"Grid")," component and a custom"," ",o.a.createElement(l.c,null,"Card")," component."),o.a.createElement(l.d,{language:"jsx"},"// src/app/components/home/index.jsx\n","\n",'import React, { useContext } from "react";\n','import AppContext from "../../context";\n','import { Grid } from "@material-ui/core";\n','import Card from "./card"; // define this how you like\n',"\n","const Home = () => {\n","  const { posts } = useContext(AppContext)\n","  return (\n","    <Page>\n","      <Grid container>\n","        {posts.map((post) => (\n","          <Grid\n","            item\n","            key={post.link}\n","            className={gridStyle}\n","            xs={12}\n","            md={6}\n","            lg={4}\n","            xl={3}\n","          >\n","            <Card post={post} />\n","          </Grid>\n","        ))}\n","      </Grid>\n","    </Page>\n","  );\n","}\n","\n","// ...\n"),o.a.createElement(l.i,null,"Lets also revist our ",o.a.createElement(l.c,null,"Post")," component. Recall that we passed a ",o.a.createElement(l.c,null,"post")," key as a prop. We can now use that key to get the content!"),o.a.createElement(l.d,{language:"jsx"},"// src/app/components/post/index.jsx\n","\n",'import React, { useContext } from "react";\n','import { Text } from "@material-ui/core";\n','import AppContext from "../../context";\n',"\n","const Post = ({ post }) => {\n","  const { posts } = useContext(AppContext)\n","  const { title, Component } = posts[post];\n","  return (\n","    <Page>\n","      <Text>\n","        {title}\n","      </Text>\n","      <Component />\n","    </Page>\n","  );\n","}\n","\n","export default Post\n"),o.a.createElement(l.i,null,"Well that pretty much covers everything! At this point, you should consider creating reusable components for every post you make. For example, the check lists, code blocks, and file hierarchy you see on this page are components I've added to"," ",o.a.createElement(l.c,null,"src/app/components/common/content"),". All that's left is adding sex appeal to your blog! Happy coding!"),o.a.createElement(l.g,null),o.a.createElement(l.i,null,"Cheers"))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.h,{key:"Overview",heading:"Overview"},o.a.createElement(i,null)),o.a.createElement(l.h,{key:"Implementation",heading:"Implementation"},o.a.createElement(s,null)))}}}]);