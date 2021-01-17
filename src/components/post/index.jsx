import React from "react";
import Header from "../common/header";

const Post = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Post;
