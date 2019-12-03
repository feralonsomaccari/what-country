import React, { useState, useEffect } from "react";
import Country from "./Country";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridList";
import { CARD_WIDTH, CARD_HEIGHT } from "../../constants/constants";
import VisibilitySensor from "react-visibility-sensor";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
  row: {
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    display: "flex",
    justifyContent: "center",
    margin: 5
  },
  test: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center center",
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    backgroundSize: "50%, 50%",
    textShadow: "1px 1px 1px rgba(0,0,0,.004)",

    backgroundcolor: "transparent",
    border: "none"
  },
  countryList: {
    justifyContent: "center"
  }
});

function CountryList(props) {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  let countries = props.countries.filter(
    (country) => {
      return country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    }
  );
  let countriesLen = countries.length;

  
  const openCountry = (country) =>{
    console.log("abiert");
  }

  return (
    <div>
      <Grid container component="main">
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
      </Grid>
      <GridList
        cellHeight={160}
        className={(classes.gridList, classes.countryList)}
        cols={3}
      >
        {countries.map((country, i) => (
          <div
            key={i}
            className={classes.row}
            // style={{ background: "linear-gradient(90deg, #"+Math.floor(Math.random()*16777215).toString(16)+" 50%, #"+Math.floor(Math.random()*16777215).toString(16)+" 50%)" }}
          >
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => {
                if (isVisible) {
                  return (
                    <GridListTile key={i} cols={i}>
                      {/* <Country
                        key={country.alpha2Code}
                        num={i}
                        name={country.name}
                        flag={country.flag}
                        nativeName={country.nativeName}
                      ></Country> */}

                      <button
                        type="button"
                        className={classes.test}
                        onClick={(country) => openCountry}
                        style={{ backgroundImage: `url(${country.flag})` }}
                      ></button>
                    </GridListTile>
                  );
                } else {
                  return <p>.</p>;
                }
              }}
            </VisibilitySensor>
          </div>
        ))}
      </GridList>
    </div>
  );
}

export default CountryList;

{
  /* <div>
            <GridList cols={5} cellHeight="auto" spacing={25}>

                {drawItems.map((country, i) => (
                    <GridListTile key={i}>
                        <CountryCard key={country.alpha2Code} num={i} name={country.name} flag={country.flag} ></CountryCard>
                    </GridListTile>
                    
                ))}
            </GridList>
        </div> */
}
