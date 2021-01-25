import React from "react";

const Code = ({ language, children }) => {
  return <code className={language}>{children}</code>;
};

export default Code;
