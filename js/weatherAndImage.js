const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "니코 쌤 api키로 해주세요";
const body = document.body;
body.style.backgroundImage = `url('images/loading.jpg')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';

function onGeoOk(position) {
    var currentWeather;
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            city.innerText = data.name;
            currentWeather = data.weather[0].main;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            getWeatherImage(currentWeather);
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//날씨에 따라 이미지 랜덤으로 가져오기

function getWeatherImage(currentWeather) {
    if (currentWeather) {
        if (currentWeather === "Clear") {
            const clearImages = ["images/clear/clear1.jpg", "images/clear/clear2.jpg", "images/clear/clear3.jpg", "images/clear/clear4.jpg"];
            const chosenImage = clearImages[Math.floor(Math.random() * clearImages.length)];
            body.style.backgroundImage = `url('${chosenImage}')`;
        } else if (currentWeather === "Clouds") {
            console.log('dfdsfsd');
            const cloudsImages = ['images/clouds/clouds1.jpg', "images/clouds/clouds2.jpg", "images/clouds/clouds3.jpg", "images/clouds/clouds4.jpg"];
            const chosenImage = cloudsImages[Math.floor(Math.random() * cloudsImages.length)];
            console.log(chosenImage);
            body.style.backgroundImage = `url('${chosenImage}')`;
        } else if (currentWeather === "Rain" || currentWeather === "Drizzle" || currentWeather === "Thunderstorm") {
            const rainImages = ["images/rain/rain1.jpg", "images/rain/rain2.jpg", "images/rain/rain3.jpg", "images/rain/rain4.jpg"];
            const chosenImage = rainImages[Math.floor(Math.random() * rainImages.length)];
            body.style.backgroundImage = `url('${chosenImage}')`;
        } else if (currentWeather === "Snow") {
            const snowImages = ["images/snow/snow1.jpg", "images/snow/snow2.jpg", "images/snow/snow3.jpg", "images/snow/snow4.jpg"];
            const chosenImage = snowImages[Math.floor(Math.random() * snowImages.length)];
            body.style.backgroundImage = `url('${chosenImage}')`;
        } else {
            const weatherImages = ["images/clear/clear1.jpg", "images/clear/clear2.jpg", "images/clear/clear3.jpg", "images/clear/clear4.jpg", "images/clouds/clouds1.jpg", "images/clouds/clouds2.jpg", "images/clouds/clouds3.jpg", "images/clouds/clouds4.jpg", "images/rain/rain1.jpg", "images/rain/rain2.jpg", "images/rain/rain3.jpg", "images/rain/rain4.jpg", "images/snow/snow1.jpg", "images/snow/snow2.jpg", "images/snow/snow3.jpg", "images/snow/snow4.jpg"];
            const chosenImage = weatherImages[Math.floor(Math.random() * weatherImages.length)];
            body.style.backgroundImage = `url('${chosenImage}')`;
        }
    } else {
        const weatherImages = ["images/clear/clear1.jpg", "images/clear/clear2.jpg", "images/clear/clear3.jpg", "images/clear/clear4.jpg", "images/clouds/clouds1.jpg", "images/clouds/clouds2.jpg", "images/clouds/clouds3.jpg", "images/clouds/clouds4.jpg", "images/rain/rain1.jpg", "images/rain/rain2.jpg", "images/rain/rain3.jpg", "images/rain/rain4.jpg", "images/snow/snow1.jpg", "images/snow/snow2.jpg", "images/snow/snow3.jpg", "images/snow/snow4.jpg"];
        const chosenImage = weatherImages[Math.floor(Math.random() * weatherImages.length)];
        document.getElementById("weather-image").src = `url('${chosenImage}')`;
    }
}