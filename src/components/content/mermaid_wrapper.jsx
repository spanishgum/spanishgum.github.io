import React, { useRef, useEffect } from "react";
// import mermaid from "mermaid";

const Mermaid = ({ name, spec }) => {
  const ref = useRef();
  useEffect(() => {
    // if (ref.current) {
    //   mermaid.mermaidAPI.render(name, spec, (result) => {
    //     ref.current.innerHTML = result;
    //   });
    // }
  }, [name, spec]);
  return <div ref={ref}></div>;
};

export default Mermaid;
