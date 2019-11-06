import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

/* Services */
import GetCountriesService from "./services/country.service";

function App() {
  const [countries, setCountries] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    let countriesPromise = new Promise((resolve, reject) => {
      GetCountriesService("ar", resolve, reject);
    });

    countriesPromise
      .then(response => {
        setCountries(response);
        console.log(response[0]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div id="app">
      <SearchBar></SearchBar>
      <GridList cols={5} cellHeight="auto" spacing={25}>
          {countries.map((country, i) => (
            <GridListTile key={i}>
            <CountryCard country={country} key={i} num={i}></CountryCard>
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
}

export default App;
