import React from "react";
import { Paper } from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Wrapper from "./wrapper";

const FileTree = ({ data }) => {
  const expanded = [];

  const renderTree = (nodes) => {
    const { id, name, children } = nodes;
    const nodeId = id ? id : name;
    expanded.push(nodeId);
    return (
      <TreeItem key={nodeId} nodeId={nodeId} label={name}>
        {Array.isArray(children)
          ? children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  return (
    <Wrapper>
      <Paper>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={expanded}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(data)}
        </TreeView>
      </Paper>
    </Wrapper>
  );
};

export default FileTree;
