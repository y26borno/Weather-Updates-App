const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=18267a09c3cb008fe493ddc699fa29ca&query=37.8267,-122.4233&units=f';


//request({ url:url, json: true}, (error,response) =>{
//as we have turned json as true
//const data = JSON.parse(response)

//console.log(response.body.current.temperature)

//})



const urlmap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieW91c3VmMTIzMTIzIiwiYSI6ImNrY3oyNnN2ZzBmc3oyc3FpNDFqenMxaDQifQ.49MVEKbbUkDjTxGeZhAiKQ'

request({ url:urlmap, json: true}, (error,response) =>{
    //as we have turned json as true
    //const data = JSON.parse(response)
    
    console.log(response.body.features[0].center[0])
    console.log(response.body.features[0].center[1])
    
    })