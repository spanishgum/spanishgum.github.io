import React from "react";

// A listing file contains every blog post in the repository.
// Each file default exports the following structure:
//
// content {
//  title,
//  description,
//  component
// }
//
const PostContext = React.createContext();
export default PostContext;
