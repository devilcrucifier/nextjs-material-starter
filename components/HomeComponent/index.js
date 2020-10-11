import React from "react";
import Link from "next/link";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: { padding: "5%" },
  heading: {
    ...theme.typography.defaultFont,
    margin: "20px 0"
  }
});

const HomeComponent = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.heading}>This is Home page</div>
    <div>
      <Link href="/temp">
        <Button color="primary" variant="contained">
          Go to Temp Page
        </Button>
      </Link>
    </div>
  </div>
);

export default withStyles(styles)(HomeComponent);
