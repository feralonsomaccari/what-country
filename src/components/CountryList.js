import React, { useState, useEffect } from "react";
import CountryCard from './CountryCard';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
/* Services */
import GetCountriesService from "../services/country.service";


function CountryList(props) {


    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [drawItems, setdrawItems] = useState([])
    

    // Like ComponentDidMount
    useEffect(() => {
        getCountries();
    }, []);

    const recursive = () => {
        setTimeout(() => {
          let hasMore = drawItems.length + 1 < countries.length;
          setdrawItems( countries.slice(0, drawItems.length + 1));
          if (hasMore) recursive();
        }, 0);
      }


    // Get Countries
    const getCountries = () => {
        let countriesPromise = new Promise((resolve, reject) => {
            GetCountriesService("", resolve, reject);
        });

        countriesPromise
            .then(response => {
                setCountries(response);
                console.log(response);
                setdrawItems(response.slice(0, 1));
                recursive();
            })
            .catch(e => {
                console.log(e);
            });
    };

   

    return (
        <div>
            <GridList cols={5} cellHeight="auto" spacing={25}>

                {drawItems.map((country, i) => (
                    <GridListTile key={i}>
                        <CountryCard key={country.alpha2Code} num={i} name={country.name} flag={country.flag} ></CountryCard>
                    </GridListTile>
                    
                ))}
            </GridList>
        </div>
    )
}

export default CountryList