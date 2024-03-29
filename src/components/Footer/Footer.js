import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2">Webpage made by Fer Alonso Maccari</Typography>
      <Typography variant="body2">
        Powered by{" "}
        <b>
          <a href="https://restcountries.com/" id="api-link" target="_blank" rel="noopener noreferrer">
            'Rest Countries'
          </a>
        </b>
      </Typography>
      <Typography variant="body2">
        Github{" "}
        <b>
          <a href="https://github.com/feralonsomaccari/what-country" id="github-link" target="_blank" rel="noopener noreferrer">
            page
          </a>
        </b>
      </Typography>
    </footer>
  );
}

export default Footer;
