function formatDate(timestamp){
  let date = new Date(timestamp);
  let hours = timestamp.getHours();
  if(hours < 10){
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if(minutes < 10){
    minutes = `0${minutes}`;
  }
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = date.getDay();
  return `${day} ${hours} ${minutes}`;
}
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let icon.Element =document.querySelector("#icon")
  temperatureElement.innerHTML = HTML.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = "Friday 5:00";
  iconElement.setAttribute(
    "src" ,
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
 let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
 axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event){
   event.preventDefault();
   let cityInputElement = document.querySelector("#city-input");
   search(cityInputElement.value);
   console.log(cityInputElement.value);
}

function displayFahrenheitTemperature(event){
  event.preventDefault();
  let displayFahrenheitTemperature = (14 *9) / 5 + 32;
  alert("Link clicked");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
