console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const info = document.getElementById('info')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const location = search.value

    fetch('http://localhost:2000/weather?address=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {

                console.log(data.error)

            } else {
                
                console.log(data.location)
            
                console.log(data.forcast)

                 info.innerHTML = data.forcast+" Celcius in "+data.location
                
            }
        })
    })
})