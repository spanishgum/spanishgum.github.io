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

const FileTreeView = ({ children }) => {
  const { fileTreeBoxStyle } = useStyles();
  return (
    <Box className={fileTreeBoxStyle}>
      <Paper>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {children}
        </TreeView>
      </Paper>
    </Box>
  );
};

const FileTreeItem = ({ text, children }) => {
  return (
    <TreeItem nodeId={text} label={text}>
      {children}
    </TreeItem>
  );
};

export { FileTreeView, FileTreeItem };
