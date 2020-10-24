import React, { useState, useEffect } from "react";
import GetCountriesService from "../../services/country.service";
import CountryList from "./CountryList";
import CountryPanel from "./Panel/CountryPanel";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const getCountries = () => {
    let countriesPromise = new Promise((resolve, reject) => {
      GetCountriesService("", resolve, reject);
    });
    countriesPromise.then(response => {
      setCountries(response);
    });
  };

  const selectCountry = (country, flagOriginPosition, elementId) => {
    setSelectedCountry({
      show: true,
      country: country,
      elementId: elementId
    });
  };
  const unselectCountry = () => {
    setSelectedCountry({});
  };

  const getBordersCountries = alpha3Code => {
    let borderCountry = countries.filter(country => country.alpha3Code.includes(alpha3Code));
    return borderCountry[0];
  };

  useEffect(() => {
    getCountries();
  }, []);


  return (
    <>
      <CountryList countries={countries} selectCountry={selectCountry}></CountryList>
      {selectedCountry.show && (
        <CountryPanel
          unselectCountry={unselectCountry}
          getBordersCountries={getBordersCountries}
          country={selectedCountry.country}
          show={selectedCountry.show}
          flagWidth={selectedCountry.flagWidth}
          flagHeight={selectedCountry.flagHeight}
          elementId={selectedCountry.elementId}
        ></CountryPanel>
      )}
    </>
  );
}

export default CountryContainer;


/* THIS IS AND EXAMPLE OF WHAT I WANT TO AVOID 
   Basic method of Listing the Json of Countries, this is simple but very slow, the idea is to replace this

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
