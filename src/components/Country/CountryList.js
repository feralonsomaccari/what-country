import React, { useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridList";
import VisibilitySensor from "react-visibility-sensor";
import GetCountriesService from "../../services/country.service";
import Country from "./CountryCard";
import Filter from "./CountryFilter";
import { CountryListStyles } from "./CountryStyles";

const useStyles = CountryListStyles;

function CountryList(props) {
  const classes = useStyles();
  const [countriesJson, setCountriesJson] = useState([]);
  const [filter, setFilter] = useState("");

  const openCountry = (country, element) => {
    props.selectCountry(country, element.getBoundingClientRect(), element.id);
  };

  let countries = countriesJson.filter(country => {
    return country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  });

  const getCountries = () => {
    let countriesPromise = new Promise((resolve, reject) => {
      GetCountriesService("", resolve, reject);
    });

    countriesPromise
      .then(response => {
        console.log(response);
        setCountriesJson(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Like ComponentDidMount
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <hr/>
      <GridList cellHeight={160} className={classes.countryList}>
        {countries.map((country, i) => (
          <div key={i} className={classes.row}>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => {
                return isVisible ? (
                  <GridListTile>
                    <Country
                      country={country}
                      openCountry={openCountry}
                    ></Country>
                  </GridListTile>
                ) : (
                  <p>.</p>
                );
              }}
            </VisibilitySensor>
          </div>
        ))}
      </GridList>
    </div>
  );
}

export default CountryList;

/* Basic method of Listing the Json of Countries, this is simple but very slow
  <div>
    <GridList cols={5} cellHeight="auto" spacing={25}>
      {drawItems.map((country, i) => (
        <GridListTile key={i}>
          <CountryCard key={country.alpha2Code} num={i} name={country.name} flag={country.flag} ></CountryCard>
        </GridListTile>
      ))}
    </GridList>
  </div> 
*/
