const fetch = require('node-fetch')
const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers:{
      'apikey': '5485d1275208bbbd88c9d50a6d85187e'
    }
  })
  .then(response => response.json())
  .then(data => data.rates.standard.value)
