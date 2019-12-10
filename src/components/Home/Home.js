import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Footer from "../Footer/Footer";
import Details from "../Country/CountryDetails";

import CountryList from "../Country/CountryList";
import { HomeStyles } from "./HomeStyles";

const useStyles = HomeStyles;

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState({
    show: false,
    flag: null,
    name: "",
    flagWidth: "0%",
    flagHeight: "0%",
    elementId: ""
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectCountry = (country, flagOriginPosition, elementId) => {
    setDetails({
      show: true,
      country: country,
      elementId: elementId,
      flagWidth: flagOriginPosition.width,
      flagHeight: flagOriginPosition.height,
      // flagWidth:
      //   "" +
      //   (flagOriginPosition.width / window.document.body.clientWidth) * 100 +
      //   "%",
      // flagHeight:
      //   "" +
      //   (flagOriginPosition.height / window.document.body.clientHeight) * 100 +
      //   "%"
    });
    
    // hideOverflow();
  };
  const deselectCountry = () => {
    setDetails({
      show: false,
      flag: null,
      name: "",
      flagWidth: "0%",
      flagHeight: "0%",
      elementId: ""
    });
  };
  const hideOverflow = () => {
    document.body.style.overflow = "hidden";
  };
  const showOverflow = () => {
    document.body.style.overflow = "unset";
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          What Country
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Country", "About"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.mainContent}>
          <div className={classes.drawerHeader} />
          <Typography variant="h4" color="textSecondary">
          What Country
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Search for any county or navigate till you find a cool looking flag
          </Typography>
          <CountryList
            selectCountry={selectCountry}
            hideOverflow={hideOverflow}
          ></CountryList>
        </div>
        <Footer></Footer>
        {details.show ? (
          <Details
            deselectCountry={deselectCountry}
            showOverflow={showOverflow}
            country={details.country}
            show={details.show}
            flagWidth={details.flagWidth}
            flagHeight={details.flagHeight}
            elementId={details.elementId}
          ></Details>
        ) : (
          null
        )}
      </main>
    </div>
  );
}
