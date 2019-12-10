import React from "react";
import { CountryDetailsStyles } from "../CountryStyles";
import Typography from "@material-ui/core/Typography";
import CountryCard from "../CountryCard";
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = CountryDetailsStyles;

function CountryDetailsPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.contentPanel}>
      <div className={classes.section1}>
        <CountryCard country={props.country} isDecoration={true}></CountryCard>
        <div>

        <Typography className={classes.item} variant="h5">
        {props.country.nativeName}
        </Typography>
        <Typography className={classes.item} variant="body1">Capital: {props.country.capital}</Typography>
        <Typography className={classes.item} variant="body1">Demonym: {props.country.demonym}</Typography>
        <Typography className={classes.item} variant="body1">Region: {props.country.region}</Typography>
        <Typography className={classes.item} variant="body1">Subregion: {props.country.subregion}</Typography>
        <Typography className={classes.item} variant="body1">alpha2Code: {props.country.alpha2Code}</Typography>
        <Typography className={classes.item} variant="body1">alpha3Code: {props.country.alpha3Code}</Typography>
        </div>
      </div>

      

      <div className={classes.separator}>
        <Typography variant="h6" className="countryDetailsTitle">
          Borders
        </Typography>
      </div>
    </div>
  );
}

export default CountryDetailsPanel;
