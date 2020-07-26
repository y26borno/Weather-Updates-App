const geocode =  require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]


  if (!address){

    console.log("Please provide an address and try again")
  }else{

    geocode(address, (error,data)=>{


        console.log(error)
        console.log(data)


        forecast(data.latitude, data.longitude, (error, forecastData) => {

           if (error){

               return console.log(error)
           }
           console.log(data.location)
           console.log(forecastData)
         })

   })


  }

   
    
    
    
    

    






