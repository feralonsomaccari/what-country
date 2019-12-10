import React, { useState, useEffect } from "react";
import GetCountriesService from "../../services/country.service";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";

function CountryContainer() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    show: false,
    flag: null,
    name: "",
    flagWidth: "0%",
    flagHeight: "0%",
    elementId: ""
  });

  const getCountries = () => {
    let countriesPromise = new Promise((resolve, reject) => {
      GetCountriesService("", resolve, reject);
    });
    countriesPromise.then(response => {
        console.log(response);
      setCountries(response);
    });
  };

  const selectCountry = (country, flagOriginPosition, elementId) => {
    setSelectedCountry({
      show: true,
      country: country,
      elementId: elementId,
      flagWidth: flagOriginPosition.width,
      flagHeight: flagOriginPosition.height
    });
  };
  const unselectCountry = () => {
    setSelectedCountry({
      show: false,
      flag: null,
      name: "",
      flagWidth: "0%",
      flagHeight: "0%",
      elementId: ""
    });
  };

  const getBordersCountries = (alpha3Code) => {
    let borderCountry = countries.filter((country) => country.alpha3Code.includes(alpha3Code));
    return borderCountry[0];
  }

  // Like ComponentDidMount
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <CountryList
        countries={countries}
        selectCountry={selectCountry}
      ></CountryList>
      {selectedCountry.show ? (
        <CountryDetails
          unselectCountry={unselectCountry}
          getBordersCountries={getBordersCountries}
          country={selectedCountry.country}
          show={selectedCountry.show}
          flagWidth={selectedCountry.flagWidth}
          flagHeight={selectedCountry.flagHeight}
          elementId={selectedCountry.elementId}
        ></CountryDetails>
      ) : null}
    </div>
  );
}

export default CountryContainer;

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
