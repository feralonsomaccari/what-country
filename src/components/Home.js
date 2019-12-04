import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import Footer from "./Footer";
import Details from "./Country/Details";

import CountryList from "./Country/CountryList";

const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  mainContent: {
    padding: theme.spacing(3),
    minHeight: "100%",
    marginBottom: "-160px",
    paddingBottom: "200px"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function Home(props) {
  // useEffect(() => {
  //   console.log("useEffect");
  //   return;
  // }, [details]); // Wrong: name is missing in deps

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [details, setDetails] = useState({
    show: false,
    flag: null,
    name: "a",
    positionTop: "50%",
    positionLeft: "50%",
    flagWidth: "1%",
    flagHeight: "1%"
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectCountry = (country, flagOriginPosition) => {
    console.log(flagOriginPosition);
    console.log("" +
    (flagOriginPosition.top / window.document.body.clientHeight) * 100 +
    "%");
    console.log("" +
    (flagOriginPosition.left / window.document.body.clientWidth) * 100 +
    "%");
    setDetails({
      show: true,
      flag: country.flag,
      name: country.name,
      positionTop:
        "" +
        (flagOriginPosition.top / window.document.body.clientHeight) * 100 +
        "%",
      positionLeft:
        "" +
        (flagOriginPosition.left / window.document.body.clientWidth) * 100 +
        "%",
      flagWidth:
        "" +
        (flagOriginPosition.width / window.document.body.clientWidth) * 100 +
        "%",
      flagHeight:
        "" +
        (flagOriginPosition.height / window.document.body.clientHeight) * 100 +
        "%"
    });
  };
  const deselectCountry = () => {
    setDetails({
      show: false,
      flag: null,
      name: null,
      positionTop: "50%",
      positionLeft: "50%",
      flagWidth: "1%",
      flagHeight: "1%"
    });
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
          <h1>What Country</h1>
          <Typography variant="body2" color="textSecondary" component="p">
            Search for any county or navigate till you find a cool looking flag
          </Typography>
          <CountryList selectCountry={selectCountry}></CountryList>
        </div>
        <Footer></Footer>
        {details.show ? (
          <Details
            deselectCountry={deselectCountry}
            flag={details.flag}
            show={details.show}
            positionTop={details.positionTop}
            positionLeft={details.positionLeft}
            flagWidth={details.flagWidth}
            flagHeight={details.flagHeight}
          ></Details>
        ) : (
          <div></div>
        )}
        
      </main>
    </div>
  );
}
