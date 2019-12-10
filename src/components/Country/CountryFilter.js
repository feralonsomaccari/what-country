import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function Filter(props) {
  return (
    <Grid container component="main">
      {/* <CssBaseline /> */}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="country"
        label="Country"
        name="country"
        autoComplete="filter"
        value={props.filter}
        onChange={e => props.setFilter(e.target.value)}
        autoFocus
      ></TextField>
    </Grid>
  );
}

export default Filter;
