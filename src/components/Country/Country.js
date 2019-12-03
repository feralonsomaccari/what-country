import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CARD_WIDTH, CARD_HEIGHT } from "../../constants/constants";

let hex1= Math.floor(Math.random()*16777215).toString(16);
let hex2= Math.floor(Math.random()*16777215).toString(16);
const useStyles = makeStyles({
  card: {
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    minWidth: CARD_WIDTH,
    minHeight: CARD_HEIGHT
  },
  contentCard:{
    height: CARD_HEIGHT,
    width:CARD_WIDTH,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
});

export default function CountryCard(props) {

  const classes = useStyles();
  // if(props.loading){
  //   return <h1>hola</h1>;
  // }
  return (

    
    <Card style={props.style} className={classes.card}>
      <CardActionArea className={classes.contentCard} >
        <CardMedia
          className={classes.media}
          image={props.flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.name}
          </Typography>
        </CardContent>
       </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
