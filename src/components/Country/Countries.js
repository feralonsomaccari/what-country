import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";
import GetCountriesService from "../../services/country.service";

function Countries() {
  const [countries, setCountries] = useState([]);

  // Like ComponentDidMount
  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    let countriesPromise = new Promise((resolve, reject) => {
      GetCountriesService("", resolve, reject);
    });

    countriesPromise
      .then(response => {
        setCountries(response);
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  if (!countries.length) {
    return <div />;
  }

  return (
   
      <CountryList  countries={countries}></CountryList>
  );
}

export default Countries;
