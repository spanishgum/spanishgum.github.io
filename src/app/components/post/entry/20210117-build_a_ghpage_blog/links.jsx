import React from "react";
import { Link } from "@material-ui/core";

const links = {
  createReactApp: (
    <Link
      href={"https://reactjs.org/docs/create-a-new-react-app.html"}
      color="secondary"
    >
      create-react-app
    </Link>
  ),
  ghPages: (
    <Link href={"https://www.npmjs.com/package/gh-pages"} color="secondary">
      gh-pages
    </Link>
  ),
  materialUI: (
    <Link href={"https://material-ui.com/"} color="secondary">
      Material-UI
    </Link>
  ),
  reactRouter: (
    <Link href={"https://reactrouter.com/"} color="secondary">
      React Router
    </Link>
  ),
};

export default links;
