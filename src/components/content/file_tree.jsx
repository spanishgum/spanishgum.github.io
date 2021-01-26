import React from "react";
import { Box, Paper } from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  fileTreeBoxStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const FileTree = ({ data }) => {
  const { fileTreeBoxStyle } = useStyles();
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
    <Box className={fileTreeBoxStyle}>
      <Paper>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={expanded}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(data)}
        </TreeView>
      </Paper>
    </Box>
  );
};

export default FileTree;
