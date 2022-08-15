import React, { useState, useEffect } from "react";
import { CountryPanelStyles } from "../CountryStyles";
import Typography from "@material-ui/core/Typography";
import CountryCard from "../CountryCard";
import Avatar from "@material-ui/core/Avatar";

const useStyles = CountryPanelStyles;

const CountryDetailsPanel = ({country, getBorderCountries = () => ''}) => {
  const classes = useStyles();
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    // const borderArray = [];
    // country.borders.map(border => {
    //   return borderArray.push(getBorderCountries(border));
    // });
    // setBorders(borderArray);
  }, [country]);

  return (
    <div className={classes.contentPanel}>
      <div className={classes.flexSection}>
        <div className={classes.countryCardPanel}>
          <CountryCard country={country} isDecoration={true} ></CountryCard>
        </div>
        <div className={classes.primaryInfo}>
          <Typography className={classes.item} variant="h5" id="native-name">
            {country.name.common}
          </Typography>
          <hr />
          {/* Some countries dont have a capital */}
          {country.capital && (
            <Typography className={classes.item} variant="body1" id="capital">
              Capital: {country.capital.join(',')}
            </Typography>
          )}

          <Typography className={classes.item} variant="body1" id="demonym">
            Demonym: {country.demonyms.eng.m}
          </Typography>
          <Typography className={classes.item} variant="body1" id="region">
            Region: {country.region}
          </Typography>
          <Typography className={classes.item} variant="body1" id="subregion">
            Subregion: {country.subregion}
          </Typography>
          <Typography className={classes.item} variant="body1" id="languages">
            Languages:
            {Object.values(country.languages).map((language, i) => (
            <span key={i}>
              {" "}
              {language}
            </span>
          ))}
          </Typography>
        </div>
      </div>

      {/* BORDERS */}
      {/* <div className={classes.separator}>
        <Typography variant="subtitle1" align="center" >
          Borders
        </Typography>
      </div>
      {country.borders.length ? (
        <div className={classes.borderCountriesContainer} id="borders">
          {borders.map((border, i) => (
            <Avatar title={border.name} src={border.flag} className={`${classes.bigAvatar} ${classes.borderCountry}`} key={i} />
          ))}
        </div>
      ) : (
          <div className={(classes.borderCountry, classes.nonBorderCountry)}>This country has no borders</div>
        )} */}

      {/* MISCELLANEOUS INFO */}
      <div className={classes.separator}>
        <Typography variant="subtitle1" align="center">
          Miscellaneous info
        </Typography>
      </div>

      <div className={classes.container}>
        <Typography className={classes.item} variant="body1" id="population">
          Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
        <Typography className={classes.item} variant="body1" id="timezones">
          Timezones:
          {country.timezones.map((timezone, i) => (
          <span key={i}>
            {" "}
            {timezone}
            {i < country.timezones.length - 1 ? "," : ""}
          </span>
        ))}
        </Typography>
        <Typography className={classes.item} variant="body1" id="latitude">
          Latitude: {country.latlng[0]}
        </Typography>
        <Typography className={classes.item} variant="body1" id="longitude">
          Longitude: {country.latlng[1]}
        </Typography>
        <hr />
        <Typography className={classes.item} variant="body1" id="currency">
          Currency: {country.currencies[Object.keys(country.currencies)[0]].name}
        </Typography>
        <Typography className={classes.item} variant="body1" id="currency-symbol">
          Currency Symbol: {country.currencies[Object.keys(country.currencies)[0]].symbol}
        </Typography>
      </div>
    </div>
  );
}

export default CountryDetailsPanel;
