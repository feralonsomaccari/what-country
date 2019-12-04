import React, { useState, useEffect } from "react";
import Zoom from "@material-ui/core/Zoom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSpring, animated } from "react-spring";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

function Details(props) {
  console.log(props);
  useEffect(() => {
    return;
  }, [props.show]); // Wrong: name is missing in deps

  const [resetAnimation, setResetAnimation] = useState(false);
  const [detailsDelay, setDetailsDelay] = useState(0);
  const [ArrowDelay, setArrowDelay] = useState(300);

  const detailsAnimation = useSpring({
    opacity:1,
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundImage: "url(" + props.flag + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    from: { width: props.flagWidth, height: props.flagHeight, opacity: 0, top: props.positionTop, left: props.positionLeft, 
      transform: "translate(+0%, +0%)" 
    },
    reset: resetAnimation,
    reverse: resetAnimation,
    delay: detailsDelay,
    onRest: () => {
      if (resetAnimation) {
        props.deselectCountry();
      }
    }
  });
  const arrowAnimation = useSpring({
    marginLeft: 0,
    from: { marginLeft: -500 },
    delay: ArrowDelay,
    reset: resetAnimation,
    reverse: resetAnimation
  });

  const resetAnimationInverted = () => {
    console.log("asd");
    setResetAnimation(true);
    setDetailsDelay(100);
    setArrowDelay(0);
  };

  return (
    <div className="countryDetailsContanier">
      <animated.div
        className="countryDetails"
        style={(detailsAnimation)}
      >
        <animated.div style={arrowAnimation}>
          <IconButton onClick={resetAnimationInverted}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default Details;
