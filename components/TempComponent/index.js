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

const TempComponent = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.heading}>This is Temp page</div>
    <div>
      <Link href="/">
        <Button color="secondary" variant="contained">
          Go to Home Page
        </Button>
      </Link>
    </div>
  </div>
);

export default withStyles(styles)(TempComponent);
