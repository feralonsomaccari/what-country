import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSpring, animated } from "react-spring";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { CountryDetailsStyles } from "./CountryStyles";
import CountryDetailsPanel from "./Details/CountryDetailsPanel";

const useStyles = CountryDetailsStyles;

function Details(props) {
  const classes = useStyles();
  useEffect(() => {}, [props.show]); // Wrong: name is missing in deps

  const [resetAnimation, setResetAnimation] = useState(false);
  const [ArrowDelay, setArrowDelay] = useState(300);
  const [cardPosition, setCardPosition] = useState([]);

  const changeCardPosition = (position) => {
    setCardPosition(position);
  }

  const getElementPositionTop = id => {
    if (document.getElementById(id)) {
      return (
        "" +
        (document.getElementById(id).getBoundingClientRect().top /
          window.document.body.clientHeight) *
          100 +
        "%"
      );
    } else {
      return "-25%";
    }
  };
  const getElementPositionLeft = id => {
    if (document.getElementById(id)) {
      return (
        "" +
        (document.getElementById(id).getBoundingClientRect().left /
          window.document.body.clientWidth) *
          100 +
        "%"
      );
    } else {
      return "-0%";
    }
  };

  const detailsAnimation = useSpring({
    width: props.flagWidth,
    height: props.flagHeight,
    top: "25%",
    left: "25%",
    backgroundImage: "url(" + props.country.flag + ")",
    backgroundSize: "100%, 100%",
    from: {
      top: getElementPositionTop(props.elementId),
      left: getElementPositionLeft(props.elementId),
      backgroundSize: "50%, 50%"
    },
    reset: resetAnimation,
    reverse: resetAnimation,
    config: { velocity: 15 },
    onRest: () => {
      if (resetAnimation) {
        props.unselectCountry();
      }
    }
  });
  const arrowAnimation = useSpring({
    transform: "translateX(0px)",
    from: { transform: "translateX(-100px)" },
    reset: resetAnimation,
    reverse: resetAnimation
  });

  const panelAnimation = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(1000px)" },
    reset: resetAnimation,
    reverse: resetAnimation
  });

  const resetAnimationInverted = () => {
    // props.showOverflow();
    setResetAnimation(true);
    setArrowDelay(0);
  };


  return (
    <div className="countryDetailsContanier">
      {/* <animated.div
        className="countryDetails"
        style={detailsAnimation}
      ></animated.div> */}

      <animated.div className="countryDetailsPanel" style={panelAnimation}>
        <animated.div
          style={arrowAnimation}
          className={classes.head}
        >
          <IconButton onClick={resetAnimationInverted}>
            <ArrowBackIcon fontSize="large" className="countryDetailsArrow" />
          </IconButton>
          <Typography variant="h6" className="countryDetailsTitle">
            {props.country.name}
          </Typography>
        </animated.div>

        <CountryDetailsPanel country={props.country} changeCardPosition={changeCardPosition} getBordersCountries={props.getBordersCountries} ></CountryDetailsPanel>
      </animated.div>
    </div>
  );
}

export default Details;
