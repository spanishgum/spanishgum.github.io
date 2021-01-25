import React from "react";
import { Link } from "@material-ui/core";

const LinkedText = ({ href, children }) => {
  return (
    <Link href={href} color="secondary">
      {children}
    </Link>
  );
};

export default LinkedText;
