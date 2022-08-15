import React from "react"
import { shallow, mount } from "enzyme"
import CountryList from "./CountryList"

const countries = [{
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
  },
  {
    "name": {
        "common": "Argentina",
        "official": "Argentine Republic",
        "nativeName": {
            "grn": {
                "official": "Argentine Republic",
                "common": "Argentina"
            },
            "spa": {
                "official": "República Argentina",
                "common": "Argentina"
            }
        }
    },
    "tld": [
        ".ar"
    ],
    "cca2": "AR",
    "ccn3": "032",
    "cca3": "ARG",
    "cioc": "ARG",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "ARS": {
            "name": "Argentine peso",
            "symbol": "$"
        }
    },
    "idd": {
        "root": "+5",
        "suffixes": [
            "4"
        ]
    },
    "capital": [
        "Buenos Aires"
    ],
    "altSpellings": [
        "AR",
        "Argentine Republic",
        "República Argentina"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
        "grn": "Guaraní",
        "spa": "Spanish"
    },
    "translations": {
        "ara": {
            "official": "جمهورية الأرجنتين",
            "common": "الأرجنتين"
        },
        "ces": {
            "official": "Argentinská republika",
            "common": "Argentina"
        },
        "cym": {
            "official": "Gweriniaeth yr Ariannin",
            "common": "Ariannin"
        },
        "deu": {
            "official": "Argentinische Republik",
            "common": "Argentinien"
        },
        "est": {
            "official": "Argentina Vabariik",
            "common": "Argentina"
        },
        "fin": {
            "official": "Argentiinan tasavalta",
            "common": "Argentiina"
        },
        "fra": {
            "official": "République argentine",
            "common": "Argentine"
        },
        "hrv": {
            "official": "Argentinski Republika",
            "common": "Argentina"
        },
        "hun": {
            "official": "Argentin Köztársaság",
            "common": "Argentína"
        },
        "ita": {
            "official": "Repubblica Argentina",
            "common": "Argentina"
        },
        "jpn": {
            "official": "アルゼンチン共和国",
            "common": "アルゼンチン"
        },
        "kor": {
            "official": "아르헨티나 공화국",
            "common": "아르헨티나"
        },
        "nld": {
            "official": "Argentijnse Republiek",
            "common": "Argentinië"
        },
        "per": {
            "official": "جمهوری آرژانتین",
            "common": "آرژانتین"
        },
        "pol": {
            "official": "Republika Argentyńska",
            "common": "Argentyna"
        },
        "por": {
            "official": "República Argentina",
            "common": "Argentina"
        },
        "rus": {
            "official": "Аргентинская Республика",
            "common": "Аргентина"
        },
        "slk": {
            "official": "Argentínska republika",
            "common": "Argentína"
        },
        "spa": {
            "official": "República Argentina",
            "common": "Argentina"
        },
        "swe": {
            "official": "Republiken Argentina",
            "common": "Argentina"
        },
        "urd": {
            "official": "جمہوریہ ارجنٹائن",
            "common": "ارجنٹائن"
        },
        "zho": {
            "official": "阿根廷共和国",
            "common": "阿根廷"
        }
    },
    "latlng": [
        -34,
        -64
    ],
    "landlocked": false,
    "borders": [
        "BOL",
        "BRA",
        "CHL",
        "PRY",
        "URY"
    ],
    "area": 2780400,
    "demonyms": {
        "eng": {
            "f": "Argentine",
            "m": "Argentine"
        },
        "fra": {
            "f": "Argentine",
            "m": "Argentin"
        }
    },
    "flag": "🇦🇷",
    "maps": {
        "googleMaps": "https://goo.gl/maps/Z9DXNxhf2o93kvyc6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/286393"
    },
    "population": 45376763,
    "gini": {
        "2019": 42.9
    },
    "fifa": "ARG",
    "car": {
        "signs": [
            "RA"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC-03:00"
    ],
    "continents": [
        "South America"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/ar.png",
        "svg": "https://flagcdn.com/ar.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ar.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ar.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            -34.58,
            -58.67
        ]
    },
    "postalCode": {
        "format": "@####@@@",
        "regex": "^([A-Z]\\d{4}[A-Z]{3})$"
    }
}]

const selectCountry = () => { }

describe("<CountryList/>", () => {
    const wrapper = mount(<CountryList countries={countries} selectCountry={selectCountry} />)
    it("should render countryList", () => {
        const countryList = wrapper.find(".countrycard")
        expect(countryList.length).toBe(2)
    })
})