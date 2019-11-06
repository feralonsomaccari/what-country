/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";

import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { tsConstructorType } from "@babel/types";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: option => option.name
});

function SearchBar() {
  const classes = useStyles();
  const [filter, setFilter] = useState("");


  

  return (
    <Grid container component="main" >
      <CssBaseline />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="country"
        label="Country"
        name="country"
        autoComplete="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        autoFocus
      ></TextField>
      {/* <Autocomplete
        options={countries}
        getOptionLabel={option => option.name}
        filterOptions={filterOptions}
        style={{ width: 100vh }}
        renderInput={params => (
          <TextField
            {...params}
            label="Custom filter"
            variant="outlined"
            fullWidth
          />
        )}
      /> */}
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/28468602_10215360001578458_6842358780733299180_n.jpg?_nc_cat=109&_nc_oc=AQmOS6-wfczdxNW8KyKR-jjkp1joF-ECL6YVcl81MeGiKygvHINbLcUKsVASljltubs&_nc_ht=scontent.faep8-2.fna&oh=7f04e4eae7bb689c567e2c2122caf2cd&oe=5E195A46)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default SearchBar;
