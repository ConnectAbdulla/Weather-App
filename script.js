const APIkey = "3b1700a7c198867338743141527cf9ed";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity-value");
let wind = document.querySelector(".wind-value");
let button = document.querySelector(".btn");
let card = document.querySelector(".card");
let input = document.querySelector(".input");
let city = document.querySelector(".city")
let feeltemp = document.querySelector(".feel-temp")

async function checkWeather(){
    let cityName = input.value;
    const res = await fetch(APIurl + cityName + `&appid=${APIkey}`);
    var data = await res.json();
    // console.log(data)
    // console.log(data['cod'])
    if (data.cod == 404){
        console.error("error")
        city.innerHTML = "Invalid Information";
        humidity.innerHTML = "%"
        temperature.innerHTML = "°C"
        feeltemp.innerHTML = "°C"
        wind.innerHTML = "km/h"
        card.style.display = "block"
    }else{
 
        document.querySelector(".city").innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°"
        feeltemp.innerHTML = "Feels-like " + Math.round(data.main.feels_like) + "°"
       humidity.innerHTML = data.main.humidity + "%"
       wind.innerHTML = data.wind.speed + "km/h"
      card.style.display = "block"
    }
   
}
// button.addEventListener("click",function(){
//     checkWeather(input.value)
// })
button.addEventListener("click", function(){
    if(input.value == ""){
         console.error("error")
       card.style.display = "none"
    }
})
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkWeather()
        if(input.value == ""){
            console.error("error")
           card.style.display = "none"
        }
    }
  });