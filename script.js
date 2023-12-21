const apiKey = "24ac145c68b0fdaf467a363045505425";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
   console.log(11)
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   let data = await response.json();
   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

searchBtn.addEventListener("click", () => {
   checkWeather(searchBox.value);
})

