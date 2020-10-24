import React, { useState, useEffect } from "react";
import { CountryPanelStyles } from "../CountryStyles";
import Typography from "@material-ui/core/Typography";
import CountryCard from "../CountryCard";
import Avatar from "@material-ui/core/Avatar";

const useStyles = CountryPanelStyles;

const CountryDetailsPanel = (props) => {
  const classes = useStyles();
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    let borderArray = [];
    props.country.borders.map(border => {
      return borderArray.push(props.getBordersCountries(border));
    });
    setBorders(borderArray);
  }, [props]);

  return (
    <div className={classes.contentPanel}>
      <div className={classes.flexSection}>
        <div className={classes.countryCardPanel}>
          <CountryCard country={props.country} isDecoration={true} ></CountryCard>
        </div>
        <div className={classes.primaryInfo}>
          <Typography className={classes.item} variant="h5" id="native-name">
            {props.country.nativeName}
          </Typography>
          <hr />
          {/* Some countries dont have a capital */}
          {props.country.capital ? (
            <Typography className={classes.item} variant="body1" id="capital">
              Capital: {props.country.capital}
            </Typography>
          ) : (
            <div>{null}</div>
          )}

          <Typography className={classes.item} variant="body1" id="demonym">
            Demonym: {props.country.demonym}
          </Typography>
          <Typography className={classes.item} variant="body1" id="region">
            Region: {props.country.region}
          </Typography>
          <Typography className={classes.item} variant="body1" id="subregion">
            Subregion: {props.country.subregion}
          </Typography>
          <Typography className={classes.item} variant="body1" id="languages">
            Languages:
            {props.country.languages.map((language, i) => (
              <span key={i}>
                {" "}
                {language.name}
                {i < props.country.languages.length - 1 ? "," : ""}
              </span>
            ))}
          </Typography>
        </div>
      </div>

      {/* BORDERS */}
      <div className={classes.separator}>
        <Typography variant="subtitle1" align="center" >
          Borders
        </Typography>
      </div>
      {props.country.borders.length ? (
        <div className={classes.borderCountriesContainer}  >
          {borders.map((border, i) => (
            <Avatar title={border.name} src={border.flag} className={`${classes.bigAvatar} ${classes.borderCountry}`} key={i}  />
          ))}
        </div>
      ) : (
        <div className={(classes.borderCountry, classes.nonBorderCountry)}>This country has no borders</div>
      )}

      {/* MISCELLANEOUS INFO */}
      <div className={classes.separator}>
        <Typography variant="subtitle1" align="center">
          Miscellaneous info
        </Typography>
      </div>

      <div className={classes.container}>
        <Typography className={classes.item} variant="body1" id="population">
          Population: {props.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
        <Typography className={classes.item} variant="body1" id="timezones">
          Timezones:
          {props.country.timezones.map((timezone, i) => (
            <span key={i}>
              {" "}
              {timezone}
              {i < props.country.timezones.length - 1 ? "," : ""}
            </span>
          ))}
        </Typography>
        <Typography className={classes.item} variant="body1" id="latitude">
          Latitude: {props.country.latlng[0]}
        </Typography>
        <Typography className={classes.item} variant="body1" id="longitude">
          Longitude: {props.country.latlng[1]}
        </Typography>
        <hr />
        <Typography className={classes.item} variant="body1" id="currency">
          Currency: {props.country.currencies[0].name}
        </Typography>
        <Typography className={classes.item} variant="body1" id="currency-code">
          Currency Code: {props.country.currencies[0].code}
        </Typography>
        <Typography className={classes.item} variant="body1" id="currency-symbol">
          Currency Symbol: {props.country.currencies[0].symbol}
        </Typography>
      </div>
    </div>
  );
}

export default CountryDetailsPanel;
