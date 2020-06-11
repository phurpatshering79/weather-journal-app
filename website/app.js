/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//http://api.openweathermap.org/data/2.5/weather?zip=11368&appid=2dd13ff75ee52f903b5cbc5a623b8354


const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="
const ApiKey = "&appid=2dd13ff75ee52f903b5cbc5a623b8354" 


document.getElementById("generate").addEventListener('click', OnClick);

function OnClick(e){
    e.preventDefault()

    const Feelings = document.getElementById('feelings').value
    const ZipCode = document.getElementById("zip").value

    weatherData = getWeather(baseURL,ZipCode,ApiKey)  //Call to a function that fetches data from the web, returns an
                                                      // of type [temperature, city]
    weatherData.then((result) => {
        let journal = {
            temp : result[0],       //accessing temperature as the first index
            city : result[1],       //accessing city as the second index
            feelings : Feelings,
            date : newDate
         }
         
         postData('/post',journal).then(updateUI)
    })
}

const getWeather = async (baseURL,ZipCode,ApiKey) => {

    const res = await fetch(baseURL+ZipCode+ApiKey)     //ASYNC part, wait until fetch gets the complete dataS
    try {
        const weatherData = await res.json()  //convert to JSON but wait for res to receive the data first
        const tempinKelvin = weatherData['main']['temp']  //recieve the weather data by accessing it from a json
        const city = weatherData['name']
        const tempinFaren = (tempinKelvin - 273.15) * 1.8 + 32 //convert to Farehnheit from Kelvin
        return [tempinFaren.toFixed(2), city]

    } catch(error){
        console.log('Error retrieving data')
    }

}



const postData = async (url='', data={}) => {

    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    })

    try {
        const newData = await response.json()
        return newData
    } catch(error){
        console.log('Failure to post data')
    }
 } 


const updateUI = async () => {
    const response = await fetch('/all')
    try{
        const newData = await response.json()
        const TempHead = document.querySelector('.card-header')
        const TextContent = document.querySelector('.card-body')
        const Datefooter = document.querySelector('.card-footer')
        console.log(TempHead,TextContent,Datefooter)
    }catch(error){
        console('error',error);
    }
    

}



