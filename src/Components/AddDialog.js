import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import Button from "@material-ui/core/Button";

import Lists from "../Components/Lists.js";
import AutosuggestInput from "../Components/AutosuggestInput.js";

const styles = theme => ({
  root: {}
});

const DetailDialog = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Dialog open={props.open} onClose={props.onClose} scroll="paper" disableBackdropClick="false" disableEscapeKeyDown="false">
        <DialogTitle id="dialog-title">Add Scenario</DialogTitle>
        <AutosuggestInput autoSuggestion={e => { props.autoSuggestion(e) }} keyJudg={e => { props.keyJudg(e) }} startSearch={e => { props.startSearch(e) } }/>
        <DialogContent dividers="true">

          {props.items.map((item) => {
            return (
              <Lists
                judg={false}
                image={item.image}
                name={item.name}
                onEvent={() => props.onEvent(item)}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={e => props.onClose()} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(DetailDialog);
