const request = require('request')
const url =
'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=uk&locationMode=array&key=TCG1TKTS1UKDZJTMR5LXDK3BF&locations=Nairobi%2C%2030%2C%20KE'
request({ url: url }, (error, response) => {
 // Parse the response body from JSON string into JavaScript object
 const data = JSON.parse(response.body)
 debugger
 // Will print the current temperature to the console
 console.log(data)
})