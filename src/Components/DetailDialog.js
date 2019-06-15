import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {}
});

const DetailDialog = props => {
  const { classes } = props;
  if (typeof props.details === "undefined") {
    return "";
  } else {
    console.log(props.details);
    return (
      <div className={classes.root}>
        <Dialog open={props.open} onClose={props.onClose} scroll="paper">
          <DialogTitle id="dialog-title">{props.name}</DialogTitle>
          <DialogContent dividers="true">
            <List>
              {props.details.map(detail => {
                return (
                  <ListItem>
                    <ListItemText primary={detail} />
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={e => props.onClose()} color="primary">
              Back
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

export default withStyles(styles)(DetailDialog);
