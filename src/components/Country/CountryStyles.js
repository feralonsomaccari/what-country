import { makeStyles } from "@material-ui/core/styles";
import { CARD_WIDTH, CARD_HEIGHT } from "../../constants/constants";

export const CountryListStyles = makeStyles( theme => ({
  row: {
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    display: "flex",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "lightGray"
  },
  countryList: {
    justifyContent: "center"
  },
  
}));

export const CountryCardStyles = makeStyles({
  countryButton: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center center",
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    backgroundSize: "50%, 50%",
    // backgroundSize: "contain",
    cursor: "pointer",
    backgroundColor: "lightGray",
    border: "none"
  }
});

export const CountryDetailsStyles = makeStyles(theme => ({
  head: {
    position: "relative",
    zindex: "1303",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center"
  },
  contentPanel: {
    overflowY: "scroll",
    paddingBottom: "30px",
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
  },
  separator: {
    width: "100%",
    color: "white",
    marginTop: theme.spacing(2),
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main
  },
  flexSection: {
    display: "flex",
  },
  item: {
    width: "100%",
    paddingLeft: theme.spacing(4)
  },
  borderCountriesContainer:{
    display:"flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    flexWrap: "wrap",
  },
  container:{
     marginTop: theme.spacing(2),
     overflowWrap: "break-word",
  },
  borderCountry:{
    margin: theme.spacing(2),
  }
}));
