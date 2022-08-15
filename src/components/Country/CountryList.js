import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridList";
import VisibilitySensor from "react-visibility-sensor";

import CountryCard from "./CountryCard";
import Filter from "./CountryFilter";
import { CountryListStyles } from "./CountryStyles";

const useStyles = CountryListStyles;

const CountryList = ({countries, selectCountry = () => ''}) => {

  const classes = useStyles();
  const [filter, setFilter] = useState("");

  const openCountry = (country, element) => {
    selectCountry(country, element.getBoundingClientRect(), element.id);
  };

  const countryList =countries.filter(country => country.name.common.toLowerCase().indexOf(filter.toLowerCase()) !== -1 );

  return (
    <>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <hr />
      <GridList cellHeight={160} className={classes.countryList} id="country-list">
        {countryList.map((country, i) => (
          
          <div key={country.cca3} className={classes.row} >
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
