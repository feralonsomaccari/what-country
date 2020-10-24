import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridList";
import VisibilitySensor from "react-visibility-sensor";

import CountryCard from "./CountryCard";
import Filter from "./CountryFilter";
import { CountryListStyles } from "./CountryStyles";

const useStyles = CountryListStyles;

const CountryList = (props) => {

  const classes = useStyles();
  const [filter, setFilter] = useState("");

  const openCountry = (country, element) => {
    props.selectCountry(country, element.getBoundingClientRect(), element.id);
  };

  let countries = props.countries.filter(country => {
    return country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  });
  return (
    <>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <hr />
      <GridList cellHeight={160} className={classes.countryList} id="country-list">
        {countries.map((country, i) => (
          
          <div key={country.alpha3Code} className={classes.row} >
            <VisibilitySensor partialVisibility className="countrycard">
              {({ isVisible }) => {
                return isVisible ? (
                  <GridListTile>
                    <CountryCard country={country} openCountry={openCountry}></CountryCard>
                  </GridListTile>
                ) : (
                  <p className={classes.loadingRow}>.</p>
                );
              }}
            </VisibilitySensor>
          </div>
        ))}
      </GridList>
    </>
  );
}

export default CountryList;
