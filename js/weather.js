const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_Key = "bedeb6d763168a7091390e7670ac10fe"

weather.innerText = "Loading..."

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Key}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError() {
    weather.parentNode.removeChild(weather);
    const clock = document.querySelector("#clock");
    clock.style.marginTop = "110px";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
