const request = require('request')

const geocode = (address,callback) =>{

    const urlmap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoieW91c3VmMTIzMTIzIiwiYSI6ImNrY3oyNnN2ZzBmc3oyc3FpNDFqenMxaDQifQ.49MVEKbbUkDjTxGeZhAiKQ'

   request({url:urlmap, json:true},(error,response)=>{

          if(error){

            callback('Unable to connect to the internet',undefined)
          }
          
          else if (response.body.features.length ===0){

            callback('Unable to find location, Try another search',undefined)
          }

          else{
                    
             callback(undefined, {

                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
             })


          }

          

   })
}


module.exports = geocode