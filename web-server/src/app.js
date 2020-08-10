const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode =  require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

//Define paths for Express config
const publicDirectory = path.join(__dirname,'../public');
const viewDirectory = path.join(__dirname,'../templates/views')
const partialsDirectory = path.join(__dirname,'../templates/partials')


app.use(express.static(publicDirectory))

// setting up the template view engine with a new different name 
app.set('view engine','hbs')
app.set('views',viewDirectory)

hbs.registerPartials(partialsDirectory)


app.get('/', (req,res)=>{

    res.render('index', {

      title:'Weather',
      footer:"This is footer"

    })
})

app.get('/about', (req,res)=>{

    res.render('about', {
 
      title:'About',
      footer:"This is footer"

    })
})


app.get('/help', (req,res)=>{

    res.render('help', {
 
      title:'Help',
      footer:"This is footer"

    })
})

app.get('/weather', (req,res)=>{

    if(!req.query.address){

              return res.send({

                   error:"Address must be mentioned"
              })
    }

    console.log(req.query.address)


    geocode(req.query.address, (error,data)=>{


        if(error){

            return res.send({error})
        }

        const latitude = data.latitude
        const longitude = data.longitude
        const location = data.location

        console.log("lat:"+latitude+ ", long: "+longitude+" location:"+location)

        forecast(location, longitude, (error, forecastData) => {

           if (error){

               return res.send({error})
           }

           res.send({
            forcast:forecastData,
            location:data.location,
            address: req.query.address
        })
           
         })

   })

    

})


app.get('/products', (req,res)=>{

    if(!req.query.search){

             res.send({

                error:'You must provide'
             })
    }else {


    console.log(req.query.name)
    res.send({

      products:[{prodId:420}]
    })

}
})

app.get('/help/*',(req,res)=>{

    res.render('error',{

        helpError:"No help found"
    })
})






app.get('*',(req,res)=>{

    res.render('error',{
        title:"404",
        error:"Not Found 404"
    })
})

app.listen(2000, (req,res)=>{


    
    console.log("server is ready")
})





console.log(__dirname)
console.log(path.join(__dirname,'../public'))