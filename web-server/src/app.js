const express = require('express')
const path = require('path')
const hbs = require('hbs')


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

      title:'index Page in hbs',
      footer:"This is footer"

    })
})

app.get('/about', (req,res)=>{

    res.render('about', {
 
      title:'About Page in hbs',
      footer:"This is footer"

    })
})


app.get('/help', (req,res)=>{

    res.render('help', {
 
      title:'About help in hbs',
      footer:"This is footer"

    })
})

app.get('*',(req,res)=>{

    res.send("Not Found 404")
})


app.listen(9000, (req,res)=>{


    
    console.log("server is ready")
})


console.log(__dirname)
console.log(path.join(__dirname,'../public'))