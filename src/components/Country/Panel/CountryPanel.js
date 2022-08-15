import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSpring, animated } from "react-spring";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { CountryPanelStyles } from "../CountryStyles";
import CountryPanelDetails from "./CountryPanelDetails";

const useStyles = CountryPanelStyles;

const CountryPanel = ({country, getBorderCountries = () => '', unselectCountry = () => ''}) => {
  const classes = useStyles();
  const [resetAnimation, setResetAnimation] = useState(false);

  const panelAnimation = useSpring({
    transform: "translateY(0%)",
    from: { transform: "translateY(100%)" },
    reset: resetAnimation,
    reverse: resetAnimation,
    onRest: () => {
      if (resetAnimation) {
        unselectCountry();
      }
    }
  });

  const resetAnimationInverted = () => {
    setResetAnimation(true);
  };

  return (
    <div className={classes.panel}>
      <animated.div className={classes.panelContainer} style={panelAnimation}>
        <div className={classes.head}>
          <IconButton onClick={resetAnimationInverted}>
            <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
          </IconButton>
          <Typography variant="h6" className={classes.title} id="country-name">
            {country.name.common}
          </Typography>
        </div>
        <CountryPanelDetails country={country} getBorderCountries={getBorderCountries}></CountryPanelDetails>
      </animated.div>
      <div className={classes.panelBackdrop} onClick={resetAnimationInverted}></div>
    </div>
  );
}

export default CountryPanel;
