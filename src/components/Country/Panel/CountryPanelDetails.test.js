import React from "react"
import { shallow, mount } from "enzyme"
import CountryPanelDetails from "./CountryPanelDetails"

const countryMockJson = {
  "name": {
      "common": "Estonia",
      "official": "Republic of Estonia",
      "nativeName": {
          "est": {
              "official": "Eesti Vabariik",
              "common": "Eesti"
          }
      }
  },
  "tld": [
      ".ee"
  ],
  "cca2": "EE",
  "ccn3": "233",
  "cca3": "EST",
  "cioc": "EST",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
      "EUR": {
          "name": "Euro",
          "symbol": "€"
      }
  },
  "idd": {
      "root": "+3",
      "suffixes": [
          "72"
      ]
  },
  "capital": [
      "Tallinn"
  ],
  "altSpellings": [
      "EE",
      "Eesti",
      "Republic of Estonia",
      "Eesti Vabariik"
  ],
  "region": "Europe",
  "subregion": "Northern Europe",
  "languages": {
      "est": "Estonian"
  },
  "translations": {
      "ara": {
          "official": "جمهورية إستونيا",
          "common": "إستونيا"
      },
      "ces": {
          "official": "Estonská republika",
          "common": "Estonsko"
      },
      "cym": {
          "official": "Gweriniaeth Estonia",
          "common": "Estonia"
      },
      "deu": {
          "official": "Republik Estland",
          "common": "Estland"
      },
      "est": {
          "official": "Eesti Vabariik",
          "common": "Eesti"
      },
      "fin": {
          "official": "Viron tasavalta",
          "common": "Viro"
      },
      "fra": {
          "official": "République d'Estonie",
          "common": "Estonie"
      },
      "hrv": {
          "official": "Republika Estonija",
          "common": "Estonija"
      },
      "hun": {
          "official": "Észt Köztársaság",
          "common": "Észtország"
      },
      "ita": {
          "official": "Repubblica di Estonia",
          "common": "Estonia"
      },
      "jpn": {
          "official": "エストニア共和国",
          "common": "エストニア"
      },
      "kor": {
          "official": "에스토니아 공화국",
          "common": "에스토니아"
      },
      "nld": {
          "official": "Republiek Estland",
          "common": "Estland"
      },
      "per": {
          "official": "جمهوری استونی",
          "common": "اِستونی"
      },
      "pol": {
          "official": "Republika Estońska",
          "common": "Estonia"
      },
      "por": {
          "official": "República da Estónia",
          "common": "Estónia"
      },
      "rus": {
          "official": "Эстонская Республика",
          "common": "Эстония"
      },
      "slk": {
          "official": "Estónska republika",
          "common": "Estónsko"
      },
      "spa": {
          "official": "República de Estonia",
          "common": "Estonia"
      },
      "swe": {
          "official": "Republiken Estland",
          "common": "Estland"
      },
      "urd": {
          "official": "جمہوریہ اسٹونیا",
          "common": "اسٹونیا"
      },
      "zho": {
          "official": "爱沙尼亚共和国",
          "common": "爱沙尼亚"
      }
  },
  "latlng": [
      59,
      26
  ],
  "landlocked": false,
  "borders": [
      "LVA",
      "RUS"
  ],
  "area": 45227,
  "demonyms": {
      "eng": {
          "f": "Estonian",
          "m": "Estonian"
      },
      "fra": {
          "f": "Estonienne",
          "m": "Estonien"
      }
  },
  "flag": "🇪🇪",
  "maps": {
      "googleMaps": "https://goo.gl/maps/6SsynwGUodL1sDvq8",
      "openStreetMaps": "https://www.openstreetmap.org/relation/79510"
  },
  "population": 1331057,
  "gini": {
      "2018": 30.3
  },
  "fifa": "EST",
  "car": {
      "signs": [
          "EST"
      ],
      "side": "right"
  },
  "timezones": [
      "UTC+02:00"
  ],
  "continents": [
      "Europe"
  ],
  "flags": {
      "png": "https://flagcdn.com/w320/ee.png",
      "svg": "https://flagcdn.com/ee.svg"
  },
  "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/ee.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/ee.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
      "latlng": [
          59.43,
          24.72
      ]
  },
  "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
  }
}

const countries = [{
    "name": {
        "common": "Latvia",
        "official": "Republic of Latvia",
        "nativeName": {
            "lav": {
                "official": "Latvijas Republikas",
                "common": "Latvija"
            }
        }
    },
    "tld": [
        ".lv"
    ],
    "cca2": "LV",
    "ccn3": "428",
    "cca3": "LVA",
    "cioc": "LAT",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "EUR": {
            "name": "Euro",
            "symbol": "€"
        }
    },
    "idd": {
        "root": "+3",
        "suffixes": [
            "71"
        ]
    },
    "capital": [
        "Riga"
    ],
    "altSpellings": [
        "LV",
        "Republic of Latvia",
        "Latvijas Republika"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "languages": {
        "lav": "Latvian"
    },
    "translations": {
        "ara": {
            "official": "جمهورية لاتفيا",
            "common": "لاتفيا"
        },
        "ces": {
            "official": "Lotyšská republika",
            "common": "Lotyšsko"
        },
        "cym": {
            "official": "Republic of Latvia",
            "common": "Latvia"
        },
        "deu": {
            "official": "Republik Lettland",
            "common": "Lettland"
        },
        "est": {
            "official": "Läti Vabariik",
            "common": "Läti"
        },
        "fin": {
            "official": "Latvian tasavalta",
            "common": "Latvia"
        },
        "fra": {
            "official": "République de Lettonie",
            "common": "Lettonie"
        },
        "hrv": {
            "official": "Republika Latvija",
            "common": "Latvija"
        },
        "hun": {
            "official": "Lett Köztársaság",
            "common": "Lettország"
        },
        "ita": {
            "official": "Repubblica di Lettonia",
            "common": "Lettonia"
        },
        "jpn": {
            "official": "ラトビア共和国",
            "common": "ラトビア"
        },
        "kor": {
            "official": "라트비아 공화국",
            "common": "라트비아"
        },
        "nld": {
            "official": "Republiek Letland",
            "common": "Letland"
        },
        "per": {
            "official": "جمهوری لتونی",
            "common": "لتونی"
        },
        "pol": {
            "official": "Republika Łotewska",
            "common": "Łotwa"
        },
        "por": {
            "official": "República da Letónia",
            "common": "Letónia"
        },
        "rus": {
            "official": "Латвийская Республика",
            "common": "Латвия"
        },
        "slk": {
            "official": "Lotyšská republika",
            "common": "Lotyšsko"
        },
        "spa": {
            "official": "República de Letonia",
            "common": "Letonia"
        },
        "swe": {
            "official": "Republiken Lettland",
            "common": "Lettland"
        },
        "urd": {
            "official": "جمہوریہ لٹویا",
            "common": "لٹویا"
        },
        "zho": {
            "official": "拉脱维亚共和国",
            "common": "拉脱维亚"
        }
    },
    "latlng": [
        57,
        25
    ],
    "landlocked": false,
    "borders": [
        "BLR",
        "EST",
        "LTU",
        "RUS"
    ],
    "area": 64559,
    "demonyms": {
        "eng": {
            "f": "Latvian",
            "m": "Latvian"
        },
        "fra": {
            "f": "Lettone",
            "m": "Letton"
        }
    },
    "flag": "🇱🇻",
    "maps": {
        "googleMaps": "https://goo.gl/maps/iQpUkH7ghq31ZtXe9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/72594"
    },
    "population": 1901548,
    "gini": {
        "2018": 35.1
    },
    "fifa": "LVA",
    "car": {
        "signs": [
            "LV"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC+02:00"
    ],
    "continents": [
        "Europe"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/lv.png",
        "svg": "https://flagcdn.com/lv.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/lv.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/lv.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            56.95,
            24.1
        ]
    },
    "postalCode": {
        "format": "LV-####",
        "regex": "^(?:LV)*(\\d{4})$"
    }
}]

// const getBordersCountries = alpha3Code => {
//   let borderCountry = countries.filter(country => country.alpha3Code.includes(alpha3Code));
//   return borderCountry[0];
// };

describe("<CountryPanelDetails/>", () => {
  const wrapper = shallow(<CountryPanelDetails country={countryMockJson} />);

  it("should render country name", () => {
    const nativeName = wrapper.find("#native-name").text();
    expect(nativeName).toBe("Estonia")
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

  //it("should render country's borders", () => {
    // const borders = wrapper.find("#borders")
    // console.log(borders.debug())
  //})

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

  it("should render country's currency symbol", () => {
    const currencySymbol = wrapper.find("#currency-symbol").text()
    expect(currencySymbol).toBe("Currency Symbol: €")
  })

})