import React, {useState} from "react";
import { CountryCardStyles } from "./CountryStyles";

const useStyles = CountryCardStyles;

export default function CountryCard(props) {
  const classes = useStyles();

  const handlerOnClick = (e) => {
    if(!props.isDecoration) props.openCountry(props.country, e.target)
  }

  return (
    <button
      id={props.isDecoration ? props.country.alpha2Code : props.country.alpha3Code } 
      type="button"
      className={classes.countryButton}
      onClick={e => handlerOnClick(e)}
      style={{ backgroundImage: `url(${props.country.flag})` }}
    ></button>
  );
}
