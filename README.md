# URLShortner RESTful API
Eine API, die die längere URLs verkürzt. Diese API bietet dem User auch die Möglichkeit, den Link mit einem gewünschten Alias zu verkürzen

## Usage
Um die API zu verwenden, müssen die Requests an das folgende Endpoint geschickt werden: <br><br>
`https://blue-smoggy-hermit-crab.cyclic.app/api/url/shorten`
### URL verkürzen
    User hat 2 Möglichkeiten um den URL zu verkürzen, am Ende kriegt man einen verkürzten URL, den man nutzen kann, um den langen URL zu bekommen.
      - #### URL mit einem generierten Code verkürzen:
        * request
        ```javascript
         let url = {
          longUrl : "https://www.google.com/"
         }

        fetch('https://blue-smoggy-hermit-crab.cyclic.app/api/url/shorten', {
          method: 'post',
          mode:"cors",
          body: JSON.stringify(url),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        ```
        *  response
        ```json
        {
          "urlCode": "1jV9bLCdC",
          "longUrl": "https://www.google.com/",
          "shortUrl": "https://blue-smoggy-hermit-crab.cyclic.app/1jV9bLCdC",
          "date": "Mon Dec 20 2021 12:29:58 GMT+0000 (Coordinated Universal Time)",
          "_id": "61c07746235084a25e9d2c98",
          "__v": 0
        }
        ```
      - #### URL mit einem gewünschten Alias verkürzen:
        * request
        ```javascript
         let url = {
          longUrl : "https://www.netflix.com/",
          alias: "netflixAlias"
         }

        fetch('https://blue-smoggy-hermit-crab.cyclic.app/api/url/shorten', {
          method: 'post',
          mode:"cors",
          body: JSON.stringify(url),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        ```
        * response
        ```json
        {
          "longUrl": "https://www.netflix.com/",
          "alias": "netflixAlias",
          "shortUrl": "https://blue-smoggy-hermit-crab.cyclic.app/netflixAlias",
          "date": "Mon Dec 20 2021 12:33:45 GMT+0000 (Coordinated Universal Time)",
          "_id": "61c07829235084a25e9d2c9c",
          "__v": 0
        }
        ```
