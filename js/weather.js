const API_KEY = "375566f3f1578040d697018d30e05d16";

function onGeoOK(postiion) {
  const lat = postiion.coords.latitude;
  const lon = postiion.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find your live");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
