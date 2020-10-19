import React from "react";
import { CountryCardStyles } from "./CountryStyles";

const useStyles = CountryCardStyles;

const CountryCard = (props) => {
  const classes = useStyles();

  const handlerOnClick = e => {
    if (!props.isDecoration) props.openCountry(props.country, e.target);
  };

  return (
    <button
      type="button"
      className={classes.countryButton}
      onClick={e => handlerOnClick(e)}
      style={{ backgroundImage: `url(${props.country.flag})` }}
    ></button>
  );
}

export default CountryCard