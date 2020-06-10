/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//http://api.openweathermap.org/data/2.5/weather?zip=11368&appid=2dd13ff75ee52f903b5cbc5a623b8354


const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="
const ApiKey = "&appid=2dd13ff75ee52f903b5cbc5a623b8354" 

const ZipCode = document.getElementById("zip")
const Feelings = document.getElementById('feelings')

document.getElementById("generate").addEventListener('click', OnClick);

function OnClick(e){
    e.preventDefault()
    getWeather(baseURL,ZipCode.value,ApiKey)  //Call to a function that fetches data from the web
}

const getWeather = async (baseURL,ZipCode,ApiKey) => {

    const res = await fetch(baseURL+ZipCode+ApiKey)     //ASYNC part, wait until fetch gets the complete dataS
    try {
        const weatherData = await res.json()  //convert to JSON but wait for res to receive the data first
        console.log(weatherData)
        const tempinKelvin = weatherData['main']['temp']  //recieve the weather data by accessing it from a json
        const tempinFaren = (tempinKelvin - 273.15) * 1.8 + 32 //convert to Farehnheit from Kelvin
        return tempinFaren

    } catch(error){
        console.log('Error retrieving data')
    }

}


