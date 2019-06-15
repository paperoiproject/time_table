import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = theme => ({
  root: {}
});

const TabsBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs indicatorColor="primary" textColor="primary" variant="fullWidth">
          {props.labels.map(label => {
            return <Tab label={label} />;
          })}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(TabsBar);
