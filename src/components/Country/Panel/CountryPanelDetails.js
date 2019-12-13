import React, { useState, useEffect } from "react";
import { CountryPanelStyles } from "../CountryStyles";
import Typography from "@material-ui/core/Typography";
import CountryCard from "../CountryCard";
import Avatar from "@material-ui/core/Avatar";

const useStyles = CountryPanelStyles;

function CountryDetailsPanel(props) {
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
        <CountryCard country={props.country} isDecoration={true}></CountryCard>
        <div>
          <Typography className={classes.item} variant="h5">
            {props.country.nativeName}
          </Typography>
          <hr />
          {/* Some countries dont have a capital */}
          {props.country.capital ? (
            <Typography className={classes.item} variant="body1">
              Capital: {props.country.capital}
            </Typography>
          ) : (
            <div>{null}</div>
          )}

          <Typography className={classes.item} variant="body1">
            Demonym: {props.country.demonym}
          </Typography>
          <Typography className={classes.item} variant="body1">
            Region: {props.country.region}
          </Typography>
          <Typography className={classes.item} variant="body1">
            Subregion: {props.country.subregion}
          </Typography>
          <Typography className={classes.item} variant="body1">
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
        <Typography variant="subtitle1" align="center">
          Borders
        </Typography>
      </div>
      {props.country.borders.length ? (
        <div className={classes.borderCountriesContainer}>
          {borders.map((border, i) => (
            <Avatar
              title={border.name}
              src={border.flag}
              className={`${classes.bigAvatar} ${classes.borderCountry}`}
              key={i}
            />
          ))}
        </div>
      ) : (
        <div className={classes.borderCountry}>This country has no borders</div>
      )}

      {/* MISCELLANEOUS INFO */}
      <div className={classes.separator}>
        <Typography variant="subtitle1" align="center">
          Miscellaneous info
        </Typography>
      </div>

      <div className={classes.container}>
        <Typography className={classes.item} variant="body1">
          Population: {props.country.population}
        </Typography>
        <Typography className={classes.item} variant="body1">
          Timezones:
          {props.country.timezones.map((timezone, i) => (
            <span key={i}>
              {" "}
              {timezone}
              {i < props.country.timezones.length - 1 ? "," : ""}
            </span>
          ))}
        </Typography>
        <Typography className={classes.item} variant="body1">
          Latitude: {props.country.latlng[0]}
        </Typography>
        <Typography className={classes.item} variant="body1">
          Longitude: {props.country.latlng[1]}
        </Typography>
        <hr />
        <Typography className={classes.item} variant="body1">
          Currency: {props.country.currencies[0].name}
        </Typography>
        <Typography className={classes.item} variant="body1">
          Currency Code: {props.country.currencies[0].code}
        </Typography>
        <Typography className={classes.item} variant="body1">
          Currency Symbol: {props.country.currencies[0].symbol}
        </Typography>
      </div>
    </div>
  );
}

export default CountryDetailsPanel;
