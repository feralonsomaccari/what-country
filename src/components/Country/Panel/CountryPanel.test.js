import React from "react";
import { shallow } from "enzyme";
import CountryPanel from "./CountryPanel";

// Mock country
const country = {
    "name": "Estonia",
    "topLevelDomain": [
        ".ee"
    ],
    "alpha2Code": "EE",
    "alpha3Code": "EST",
    "callingCodes": [
        "372"
    ],
    "capital": "Tallinn",
    "altSpellings": [
        "EE",
        "Eesti",
        "Republic of Estonia",
        "Eesti Vabariik"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 1315944,
    "latlng": [
        59,
        26
    ],
    "demonym": "Estonian",
    "area": 45227,
    "gini": 36,
    "timezones": [
        "UTC+02:00"
    ],
    "borders": [
        "LVA",
        "RUS"
    ],
    "nativeName": "Eesti",
    "numericCode": "233",
    "currencies": [
        {
            "code": "EUR",
            "name": "Euro",
            "symbol": "€"
        }
    ],
    "languages": [
        {
            "iso639_1": "et",
            "iso639_2": "est",
            "name": "Estonian",
            "nativeName": "eesti"
        }
    ],
    "translations": {
        "de": "Estland",
        "es": "Estonia",
        "fr": "Estonie",
        "ja": "エストニア",
        "it": "Estonia",
        "br": "Estônia",
        "pt": "Estónia",
        "nl": "Estland",
        "hr": "Estonija",
        "fa": "استونی"
    },
    "flag": "https://restcountries.eu/data/est.svg",
    "regionalBlocs": [
        {
            "acronym": "EU",
            "name": "European Union",
            "otherAcronyms": [],
            "otherNames": []
        }
    ],
    "cioc": "EST"
}

describe("<CountryPanel/>", () => {
    it("should render country name", () => {
        const wrapper = shallow(<CountryPanel country={country}></CountryPanel>)
        const countryname = wrapper.find("#country-name").text();
        expect(countryname).toBe("Estonia")
    })
})