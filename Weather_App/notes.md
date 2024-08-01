## Intuition building


### Real Lift User
* user -> url -> they see a webpage
* First file that you -> HTML file
* HTML file is parsed and converted into human understable UI -> Browser
**Parsing** : to read a file and convert it into certain format
* HTML , CSS -> Browser
* jpg -> imageviewer -> image
* mp4 -> vlc media -> video

## Weather App
* need a `data` -> from an `api` -> `server url -> data`
* that should also provide in `particular format`

## Data representation formats
1. Format : spreadsheet format
    Parser : excel, google sheet
2. XML -> xtensible markup language -> `you represent data with the help of tags`
    Parser : XML parser
3. JSON : `Javascript object notation `
    JS language has inbuilt capabilities to read data


## HTTP packet
* Header -> metadata
* Body -> actual data

```json
{
    "location": {
        "name": "Manipur",
        "region": "",
        "country": "Bangladesh",
        "lat": 23.65,
        "lon": 90.0,
        "tz_id": "Asia/Dhaka",
        "localtime_epoch": 1721145677,
        "localtime": "2024-07-16 22:01"
    },
    "current": {
        "last_updated_epoch": 1721145600,
        "last_updated": "2024-07-16 22:00",
        "temp_c": 28.4,
        "temp_f": 83.1,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 9.8,
        "wind_kph": 15.8,
        "wind_degree": 141,
        "wind_dir": "SE",
        "pressure_mb": 1002.0,
        "pressure_in": 29.57,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 86,
        "cloud": 20,
        "feelslike_c": 34.3,
        "feelslike_f": 93.7,
        "windchill_c": 28.4,
        "windchill_f": 83.1,
        "heatindex_c": 34.3,
        "heatindex_f": 93.7,
        "dewpoint_c": 25.8,
        "dewpoint_f": 78.4,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 1.0,
        "gust_mph": 15.3,
        "gust_kph": 24.6,
        "air_quality": {
            "co": 270.4,
            "no2": 3.1,
            "o3": 34.3,
            "so2": 0.7,
            "pm2_5": 6.4,
            "pm10": 10.0,
            "us-epa-index": 1,
            "gb-defra-index": 1
        }
    }
}
```

## API -> Data
## UI -> build -> app -> request -> API -> data -> update
    

## Weather API

## Dependencies
* Data Source -> API -> http://api.weatherapi.com/v1/current.json?key=7da0731d4f83417db6e155626241607&q=Manipur&aqi=no
* Flow
    * First Dummy UI
        * need to create simple UI
    * Need Data -> How to make a request API request
        * request make
        * response got
        * data -> parse
        * extract your required field
    * Data -> document -> data update


## Browser vs JS

* setTimeout -> Browser
* addEventListener -> browser
* URL -> browser

**Logic** -> JS


