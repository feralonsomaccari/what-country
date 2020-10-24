import React from "react"
import { shallow, mount } from "enzyme"
import CountryList from "./CountryList"

const countries = [{
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
},
{
    "name": "Argentina",
    "topLevelDomain": [
        ".ar"
    ],
    "alpha2Code": "AR",
    "alpha3Code": "ARG",
    "callingCodes": [
        "54"
    ],
    "capital": "Buenos Aires",
    "altSpellings": [
        "AR",
        "Argentine Republic",
        "República Argentina"
    ],
    "region": "Americas",
    "subregion": "South America",
    "population": 43590400,
    "latlng": [
        -34,
        -64
    ],
    "demonym": "Argentinean",
    "area": 2780400,
    "gini": 44.5,
    "timezones": [
        "UTC-03:00"
    ],
    "borders": [
        "BOL",
        "BRA",
        "CHL",
        "PRY",
        "URY"
    ],
    "nativeName": "Argentina",
    "numericCode": "032",
    "currencies": [
        {
            "code": "ARS",
            "name": "Argentine peso",
            "symbol": "$"
        }
    ],
    "languages": [
        {
            "iso639_1": "es",
            "iso639_2": "spa",
            "name": "Spanish",
            "nativeName": "Español"
        },
        {
            "iso639_1": "gn",
            "iso639_2": "grn",
            "name": "Guaraní",
            "nativeName": "Avañe'ẽ"
        }
    ],
    "translations": {
        "de": "Argentinien",
        "es": "Argentina",
        "fr": "Argentine",
        "ja": "アルゼンチン",
        "it": "Argentina",
        "br": "Argentina",
        "pt": "Argentina",
        "nl": "Argentinië",
        "hr": "Argentina",
        "fa": "آرژانتین"
    },
    "flag": "https://restcountries.eu/data/arg.svg",
    "regionalBlocs": [
        {
            "acronym": "USAN",
            "name": "Union of South American Nations",
            "otherAcronyms": [
                "UNASUR",
                "UNASUL",
                "UZAN"
            ],
            "otherNames": [
                "Unión de Naciones Suramericanas",
                "União de Nações Sul-Americanas",
                "Unie van Zuid-Amerikaanse Naties",
                "South American Union"
            ]
        }
    ],
    "cioc": "ARG"
}]

const selectCountry = () => { }

describe("<CountryList/>", () => {
    const wrapper = mount(<CountryList countries={countries} selectCountry={selectCountry} />)
    it("should render countryList", () => {
        const countryList = wrapper.find(".countrycard")
        expect(countryList.length).toBe(2)
    })
})