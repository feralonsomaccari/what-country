import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSpring, animated } from "react-spring";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { CountryPanelStyles } from "../CountryStyles";
import CountryPanelDetails from "./CountryPanelDetails";

const useStyles = CountryPanelStyles;

function Details(props) {
  const classes = useStyles();

  const [resetAnimation, setResetAnimation] = useState(false);

  const panelAnimation = useSpring({
    transform: "translateY(0%)",
    from: { transform: "translateY(200%)" },
    reset: resetAnimation,
    reverse: resetAnimation,
    onRest: () => {
      if (resetAnimation) {
        props.unselectCountry();
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
          <IconButton onClick={resetAnimationInverted} >
            <ArrowBackIcon fontSize="large" className={classes.arrowBack}/>
          </IconButton>
          <Typography variant="h6" className="{classes.title}">
            {props.country.name}
          </Typography>
        </div>
        <CountryPanelDetails
          country={props.country}
          getBordersCountries={props.getBordersCountries}
        ></CountryPanelDetails>
      </animated.div>
    </div>
  );
}

export default Details;
