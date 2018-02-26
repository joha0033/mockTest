const fetch = require('node-fetch')
const order = require('./order')

const result = order(fetch, process {
  country: 'DE',
  items: [
    { 'name': 'Dragon waffles', price: 20, quantity: 2 }
})

console.log(result);


// const result =
//   fetch('https://vatapi.com/v1/country-code-check?code=DE', {
//     headers:{
//       'apikey': '5485d1275208bbbd88c9d50a6d85187e'
//     }
//   })
//   .then(response => response.json())
//   .then(data => data.rates.standard.value)
