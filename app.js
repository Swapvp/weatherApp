let weatherImg = document.querySelector("#weather-img");
let temp = document.querySelector("#temp");
let inputBox = document.querySelector("#inputBox");
const searchBtn = document.querySelector("#searchBtn");
let locationCity   = document.querySelector("#location");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let seaLevel = document.querySelector("#sea");
let feels = document.querySelector("#feels");
let weatherBody = document.querySelector(".weather-body");





const apiKey = "883e47991909df38296a3e72ed4ea976";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



async function callApi (city) {
    
    if (inputBox.value == 0) {
        alert ("Search cannot be empty")
    }
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)
    if(response.status == 404) {
        alert("wrong city")
    }else {
        
        temp.innerText = Math.round(data.main.temp) + "°c";
        locationCity.innerText = data.name;
        humidity.innerText = `${data.main.humidity} %`
        wind.innerText = `${data.wind.speed} km/h`
        seaLevel.innerText = data.main.sea_level
        feels.innerText = `Feels Like ${data.main.feels_like}°c`      
    }


    if(data.weather[0].main == "Clouds") {
        weatherImg.src ="assets/clouds.png"
    }else if (data.weather[0].main == "Clear") {
        weatherImg.src ="assets/clear.png"
    }else if (data.weather[0].main == "Rain") {
        weatherImg.src ="assets/rain.png"
    }else if (data.weather[0].main == "Drizzle") {
        weatherImg.src ="assets/drizzle.png"
    }else if (data.weather[0].main == "Mist") {
        weatherImg.src ="assets/mist.png"
    }else if (data.weather[0].main == "Snow") {
        weatherImg.src ="assets/snow.png"
    }

    weatherBody.style.display = "block"
    
}

searchBtn.addEventListener("click", () => {
    callApi(inputBox.value)
})




// q={city name}&appid={API key}
