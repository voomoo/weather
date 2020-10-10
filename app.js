var lat, long, temp = 0, icon = '01d', pressure = 1012, humidity = 81, windSpeed = 4.1, cloudy = 90, main='drizzle', description = 'description';

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            var apiKey = '99b452ff7f185125eb45f460029fd177';
            console.log(lat, long);

            var proxy = 'https://cors-anywhere.herokuapp.com/';
            var api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                temp = data.main.temp;
                var city = data.name;
                icon = data.weather[0].icon;
                pressure = data.main.pressure;
                humidity = data.main.humidity;
                windSpeed = data.wind.speed;
                cloudy = data.clouds.all;
                main = data.weather[0].main;
                description = data.weather[0].description;
                document.querySelector('.temp').textContent = temp+'℃';
                document.getElementById('image').src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
                document.getElementById('pressure').textContent = pressure+' hPa';
                document.getElementById('humidity').textContent = humidity+'%';
                document.getElementById('wind-speed').textContent = windSpeed+' m/s';
                document.getElementById('cloudy').textContent = cloudy+'%';
                document.querySelector('.main').textContent = main;
                document.querySelector('.description').textContent = description;
                document.querySelector('.city').textContent = city;
            });
        });
    }
});

var d = new Date();
var day = d.getDay();
var hour = d.getHours();
var min = d.getMinutes();
var date = d.getDate();
var month = d.getMonth();
if(day === 0) {
    day = 'Sunday'
} else if(day === 1) {
    day = 'Monday'
} else if(day === 2) {
    day = 'Tuesday'
} else if(day === 3) {
    day = 'Wednesday'
} else if(day === 4) {
    day = 'Thursday'
} else if(day === 5) {
    day = 'Friday'
} else if(day === 6) {
    day = 'Saturday';
}

if(month === 0) {
    month = 'January'
} else if(month === 1) {
    month = 'February'
} else if(month === 2) {
    month = 'March'
} else if(month === 3) {
    month = 'April'
} else if(month === 4) {
    month = 'May'
} else if(month === 5) {
    month = 'June'
} else if(month=== 6) {
    month = 'July';
} else if(month === 7) {
    month = 'Auguest'
} else if(month === 8) {
    month = 'September'
} else if(month === 9) {
    month = 'October'
} else if(month === 10) {
    month = 'November'
} else if(month === 11) {
    month = 'December'
}

document.querySelector('.date').textContent = `${day}, ${date}th ${month}`;
document.querySelector('.time').textContent = `Time: ${hour}:${min}`;