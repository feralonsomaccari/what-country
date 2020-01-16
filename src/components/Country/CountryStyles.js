import { makeStyles } from "@material-ui/core/styles";
import { CARD_WIDTH, CARD_HEIGHT } from "../../constants/constants";

export const CountryListStyles = makeStyles(theme => ({
  row: {
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1),
    backgroundColor: "#f2f2f2"
  },
  countryList: {
    justifyContent: "center"
  }
}));

export const CountryCardStyles = makeStyles({
  countryButton: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center center",
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    backgroundSize: "75%",
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    border: "none",
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      backgroundColor: "#eeeeee"
    }
  }
});

export const CountryPanelStyles = makeStyles(theme => ({
  panel: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "1300"
  },
  panelContainer: {
    maxWidth: "600px",
    height: "85%",
    background: "#fff",
    zIndex: "1302",
    marginLeft: "auto",
    marginRight: "auto",
    right: "1rem",
    left: "1rem",
    bottom: "0%",
    position: "absolute",
    display: "grid"
  },
  head: {
    position: "relative",
    zindex: "1303",
    background: theme.palette.primary.main,
    alignItems: "center",
    color: "#fff"
  },
  arrowBack: {
    color: "#fff",
    display: "inline-block",
    verticalAlign: "middle"
  },
  title: {
    display: "inline-block",
    verticalAlign: "middle"
  },
  contentPanel: {
    overflowY: "scroll",
    paddingBottom: "2rem",
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: "#fff"
  },
  separator: {
    width: "100%",
    color: "white",
    marginTop: theme.spacing(2),
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main
  },
  flexSection: {
    display: "flex"
  },
  item: {
    width: "100%",
    paddingLeft: theme.spacing(4)
  },
  borderCountriesContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    flexWrap: "wrap"
  },
  container: {
    marginTop: theme.spacing(2),
    overflowWrap: "break-word"
  },
  borderCountry: {
    margin: theme.spacing(2)
  }
}));
