import React from "react";
import LinkedText from "components/content/linked_text";

const links = {
  previousPost: (
    <LinkedText href={"/blog/post/20210117-build_a_ghpage_blog/"}>
      previous post
    </LinkedText>
  ),
  createReactApp: (
    <LinkedText href={"https://reactjs.org/docs/create-a-new-react-app.html"}>
      create-react-app
    </LinkedText>
  ),
  reactStatic: (
    <LinkedText href={"https://github.com/react-static/react-static"}>
      react-static
    </LinkedText>
  ),
  webpack: <LinkedText href={"https://webpack.js.org/"}>webpack</LinkedText>,
  webpackCrashCourse: (
    <LinkedText href={"https://www.youtube.com/watch?v=lFjinlwpcHY"}>
      webpack crash course
    </LinkedText>
  ),
  reachRouter: (
    <LinkedText href={"https://reach.tech/router/"}>reach-router</LinkedText>
  ),
  reactStaticPluginFilesystem: (
    <LinkedText
      href={
        "https://github.com/react-static/react-static/tree/master/packages/react-static-plugin-source-filesystem"
      }
    >
      react-static-plugin-source-filesystem
    </LinkedText>
  ),
  reactStaticDocument: (
    <LinkedText
      href={
        "https://github.com/react-static/react-static/blob/master/docs/config.md#document"
      }
    >
      Document
    </LinkedText>
  ),
};

export default links;
