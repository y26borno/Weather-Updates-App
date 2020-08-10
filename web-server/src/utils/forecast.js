const request = require('request')


const forecast = (lat,lon,callback)=>{

 
  //const url = 'http://api.weatherstack.com/current?access_key=18267a09c3cb008fe493ddc699fa29ca&query='+encodeURIComponent(lat)+','+encodeURIComponent(lon)+'&units=f';
 //const url = 'http://api.weatherstack.com/current?access_key=18267a09c3cb008fe493ddc699fa29ca&query='+encodeURIComponent(lat)+','+encodeURIComponent(lon);
  const url = 'http://api.weatherstack.com/current?access_key=18267a09c3cb008fe493ddc699fa29ca&query='+encodeURIComponent(lat);
    request({url:url,json:true},(error,response)=>{


       if(error){

                callback('unable to connect',undefined)
       }
       else if (response.body.error){

           
                callback("please try with the correct location",undefined)

       }
       
       else{

        
           callback(undefined,response.body.current.temperature )  
         }
        
       

    })

    }


   module.exports = forecast