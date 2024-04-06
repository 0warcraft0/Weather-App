const weatherfor = document.getElementById('weatherfor');

function getTimes(lat, lon) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            weathermode = JSON.parse(xhr.responseText);
            loadweathermode(weathermode);
        }
    }

    // Construct the endpoint URL below
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=Api key here`;
    
    xhr.open('GET', url);
    xhr.send();
}


document.querySelector('#weathermode').addEventListener("change", function() {
    
    selectCity = this.value;

    switch (selectCity) {
        case "kingsport":
            getTimes(36.538960, -82.540848);
            break;
        case "newyork":
            getTimes(40.712776, -74.005974);
            break;
        case "chicago":
            getTimes(41.878113, -87.629799);
            break;
        case "losangeles":
            getTimes(34.052235, -118.243683);
            break;
    }
});


function loadweathermode(weathermode) {
    let temperatureFahrenheit = (weathermode.main.temp - 273.15) * 9/5 + 32; // Convert Kelvin to Fahrenheit
    let output = `<h4 class="weather-output">Location: ${weathermode.name}</h4>`;
    output += `<div class="temp">Temp F: ${temperatureFahrenheit.toFixed(2)}</div>`; // Rounded to two decimal places
    output += `<div class="description">Currently: ${weathermode.weather[0].description}</div>`;
    output += `<div class="wind">Wind: ${weathermode.wind.speed} mph</div>`;
    
    weatherfor.innerHTML = output;
}
