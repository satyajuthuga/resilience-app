import React from "react";
import Grid from "@material-ui/core/Grid";
import ComingSoonImage from "../../../img/HomeImage1.png";

const ComingSoon = () => {
  return (
    <div>
      <Grid container direction="column" alignContent="center" alignItems="center">
        <Grid item>
          <h1>Coming soon</h1>
        </Grid>
        <Grid item>
          <p>
            <i>A list of your food boxes and their status will appear here.</i>
          </p>
        </Grid>
        <Grid item>
          <img src={ComingSoonImage} alt="Coming soon" />
        </Grid>
        <Grid item>
          <p>
            <i>Please contact our volunteers if you would like more information.</i>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComingSoon;