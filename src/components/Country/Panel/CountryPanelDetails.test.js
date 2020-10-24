import React from "react"
import { shallow, mount } from "enzyme"
import CountryPanelDetails from "./CountryPanelDetails"

const countryMockJson = {
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
const countries = [{
  "name": "Latvia",
  "topLevelDomain": [
    ".lv"
  ],
  "alpha2Code": "LV",
  "alpha3Code": "LVA",
  "callingCodes": [
    "371"
  ],
  "capital": "Riga",
  "altSpellings": [
    "LV",
    "Republic of Latvia",
    "Latvijas Republika"
  ],
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 1961600,
  "latlng": [
    57,
    25
  ],
  "demonym": "Latvian",
  "area": 64559,
  "gini": 36.6,
  "timezones": [
    "UTC+02:00"
  ],
  "borders": [
    "BLR",
    "EST",
    "LTU",
    "RUS"
  ],
  "nativeName": "Latvija",
  "numericCode": "428",
  "currencies": [
    {
      "code": "EUR",
      "name": "Euro",
      "symbol": "€"
    }
  ],
  "languages": [
    {
      "iso639_1": "lv",
      "iso639_2": "lav",
      "name": "Latvian",
      "nativeName": "latviešu valoda"
    }
  ],
  "translations": {
    "de": "Lettland",
    "es": "Letonia",
    "fr": "Lettonie",
    "ja": "ラトビア",
    "it": "Lettonia",
    "br": "Letônia",
    "pt": "Letónia",
    "nl": "Letland",
    "hr": "Latvija",
    "fa": "لتونی"
  },
  "flag": "https://restcountries.eu/data/lva.svg",
  "regionalBlocs": [
    {
      "acronym": "EU",
      "name": "European Union",
      "otherAcronyms": [],
      "otherNames": []
    }
  ],
  "cioc": "LAT"
},
{
  "name": "Latvia",
  "topLevelDomain": [
    ".lv"
  ],
  "alpha2Code": "LV",
  "alpha3Code": "LVA",
  "callingCodes": [
    "371"
  ],
  "capital": "Riga",
  "altSpellings": [
    "LV",
    "Republic of Latvia",
    "Latvijas Republika"
  ],
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 1961600,
  "latlng": [
    57,
    25
  ],
  "demonym": "Latvian",
  "area": 64559,
  "gini": 36.6,
  "timezones": [
    "UTC+02:00"
  ],
  "borders": [
    "BLR",
    "EST",
    "LTU",
    "RUS"
  ],
  "nativeName": "Latvija",
  "numericCode": "428",
  "currencies": [
    {
      "code": "EUR",
      "name": "Euro",
      "symbol": "€"
    }
  ],
  "languages": [
    {
      "iso639_1": "lv",
      "iso639_2": "lav",
      "name": "Latvian",
      "nativeName": "latviešu valoda"
    }
  ],
  "translations": {
    "de": "Lettland",
    "es": "Letonia",
    "fr": "Lettonie",
    "ja": "ラトビア",
    "it": "Lettonia",
    "br": "Letônia",
    "pt": "Letónia",
    "nl": "Letland",
    "hr": "Latvija",
    "fa": "لتونی"
  },
  "flag": "https://restcountries.eu/data/lva.svg",
  "regionalBlocs": [
    {
      "acronym": "EU",
      "name": "European Union",
      "otherAcronyms": [],
      "otherNames": []
    }
  ],
  "cioc": "LAT"
}]

const getBordersCountries = alpha3Code => {
  let borderCountry = countries.filter(country => country.alpha3Code.includes(alpha3Code));
  return borderCountry[0];
};

describe("<CountryPanelDetails/>", () => {
  const wrapper = shallow(<CountryPanelDetails country={countryMockJson} getBordersCountries={getBordersCountries} />);

  it("should render country name", () => {
    const nativeName = wrapper.find("#native-name").text();
    expect(nativeName).toBe("Eesti")
  })

  it("should render country's capital", () => {
    const capital = wrapper.find("#capital").text();
    expect(capital).toBe("Capital: Tallinn")
  })

  it("should render demonym correctly", () => {
    const denomyn = wrapper.find("#demonym").text();
    expect(denomyn).toBe("Demonym: Estonian")
  })

  it("should render country's region", () => {
    const region = wrapper.find("#region").text();
    expect(region).toBe("Region: Europe")
  })

  it("should render country's subregion", () => {
    const subregion = wrapper.find("#subregion").text();
    expect(subregion).toBe("Subregion: Northern Europe")
  })

  it("should render country's languages", () => {
    const languages = wrapper.find("#languages")
    const language1 = languages.at(0).text()
    expect(languages.length).toBe(1)
    expect(language1).toBe("Languages: Estonian")
  })

  it("should render country's borders", () => {
    const population = wrapper.find("#population").text()
    expect(population).toBe("Population: 1,315,944")
  })

  it("should render country's timezones", () => {
    const timezones = wrapper.find("#timezones")
    const timezone1 = timezones.at(0).text()
    expect(timezone1).toBe("Timezones: UTC+02:00")
  })

  it("should render country's latitude", () => {
    const latitude = wrapper.find("#latitude").text();
    expect(latitude).toBe("Latitude: 59")
  })

  it("should render country's longitude", () => {
    const longitude = wrapper.find("#longitude").text()
    expect(longitude).toBe("Longitude: 26")
  })

  it("should render country's currency", () => {
    const currency = wrapper.find("#currency").text()
    expect(currency).toBe("Currency: Euro")
  })

  it("should render country's currency code", () => {
    const currencyCode = wrapper.find("#currency-code").text()
    expect(currencyCode).toBe("Currency Code: EUR")

  })
  it("should render country's currency symbol", () => {
    const currencySymbol = wrapper.find("#currency-symbol").text()
    expect(currencySymbol).toBe("Currency Symbol: €")
  })

})