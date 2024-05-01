const API_KEY = 'd3462e21352eaa7e532dae1bc0df4162';

let cityName = document.getElementById('cityName');
let temperatureDisplay = document.getElementById('temperatureDisplay');
let feelsLikeTemperature = document.getElementById('feelsLikeTemperature');
let temperatureImageDisplay = document.getElementById('temperatureImageDisplay');
let info = document.getElementById('info');

function displayTemp(temperature) {
    try {
        let cityNameFromUser = cityName.value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameFromUser}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {

                temperature = data.main.temp;

                if (temperature >= 18) {
                    temperatureImageDisplay.src = 'sun.png';
                } else if (temperature >= 11 && temperature <= 17) {
                    temperatureImageDisplay.src = 'sun_behind_clouds.png';
                } else if (temperature >= 1 && temperature <= 10) {
                    temperatureImageDisplay.src = 'clouds.png';
                } else if (temperature <= 0) {
                    temperatureImageDisplay.src = 'snowflake.png';
                }
                temperatureDisplay.innerHTML = `${temperature.toFixed(1)} °C`;
                feelsLikeTemperature.innerHTML = `(Odczuwalna <u>${data.main.feels_like.toFixed(1)}</u> °C)`;
                info.innerHTML = `
                <ul>
                <li> Opis: ${data.weather[0].description}</li>
                <li> Prędkość wiatru: ${data.wind.speed} m/s</li>
                <li> Wilgotność: ${data.main.humidity}% </li>
                <li> Ciśnienie: ${data.main.pressure} hPa </li>
                <li> Min. temperatura: ${data.main.temp_min.toFixed(1)} </li>
                <li> Max. temperatura: ${data.main.temp_max.toFixed(1)} </li>
                <li> Chmury: ${data.clouds.all} </li>
                <li> Kraj: ${data.sys.country} </li>
                </ul>
                `;
        });
    } catch (error) {
        console.warn(error);
    }
}
setInterval(displayTemp, 100);

function getRandomPlace() {
    let places = [
        'Tokio',
        'Pekin',
        'Szanghaj',
        'Delhi',
        'Mumbai',
        'São Paulo',
        'Istanbul',
        'Moskwa',
        'Kair',
        'Londyn',
        'Nowy Jork',
        'Los Angeles',
        'Paryż',
        'Seul',
        'Osaka',
        'Buenos Aires',
        'Rio de Janeiro',
        'Kalkuta',
        'Chicago',
        'Dżakarta',
        'Meksyk',
        'Manila',
        'Lagos',
        'Bangalore',
        'Bangkok',
        'Bogota',
        'Madryt',
        'Toronto',
        'Singapur',
        'Rijad',
        'Dubaï',
        'Mumbai',
        'Aleksandria',
        'Mosul',
        'Alżir',
        'Oran',
        'Konstantyna',
        'Damaszek',
        'Bagdad',
        'Basra',
        'Alger',
        'Homs',
        'Latakia',
        'Aleppo',
        'Birmingham',
        'Glasgow',
        'Liverpool',
        'Manchester',
        'Leeds',
        'Belfast',
        'Edinburgh',
        'Dublin',
        'Cork',
        'Bristol',
        'Cardiff',
        'London',
        'Aberdeen',
        'Nairobi',
        'Dar es Salaam',
        'Addis Abeba',
        'Kampala',
        'Kinszasa',
        'Luanda',
        'Abidżan',
        'Aleksandria',
        'Kair',
        'Aleppo',
        'Bagdad',
        'Alger',
        'Oran',
        'Aleksandria',
        'Tamanrasset',
        'Sétif',
        'Touggourt',
        'Illizi',
        'Adrar',
        'Reggane',
        'Tindouf',
        'El Golea',
        'In Aménas',
        'Timimoun',
        'Tebessa',
        'Guelma',
        'Jijel',
        'Tizi Ouzou',
        'El Djelfa',
        'Touggourt',
        'Illizi',
        'Adrar',
        'Tindouf'
    ];
    let place = Math.floor(Math.random() * places.length);
    let cityNameFromUser = places[place];
    cityName.value = cityNameFromUser;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameFromUser}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => { v
                temperature = data.main.temp;

                if (temperature >= 18) {
                    temperatureImageDisplay.src = 'sun.png';
                } else if (temperature >= 11 && temperature <= 17) {
                    temperatureImageDisplay.src = 'sun_behind_clouds.png';
                } else if (temperature >= 1 && temperature <= 10) {
                    temperatureImageDisplay.src = 'clouds.png';
                } else if (temperature <= 0) {
                    temperatureImageDisplay.src = 'snowflake.png';
                }
                temperatureDisplay.innerHTML = `${temperature.toFixed(1)} °C`;
                feelsLikeTemperature.innerHTML = `(Odczuwalna <u>${data.main.feels_like.toFixed(1)}</u> °C)`;
                info.innerHTML = `
                <ul>
                <li> Opis: ${data.weather[0].description}</li>
                <li> Prędkość wiatru: ${data.wind.speed} m/s</li>
                <li> Wilgotność: ${data.main.humidity}% </li>
                <li> Ciśnienie: ${data.main.pressure} hPa </li>
                <li> Min. temperatura: ${data.main.temp_min.toFixed(1)} </li>
                <li> Max. temperatura: ${data.main.temp_max.toFixed(1)} </li>
                <li> Chmury: ${data.clouds.all} </li>
                <li> Kraj: ${data.sys.country} </li>
                </ul>
                `;
        });
}

document.body.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        getRandomPlace();
    }
});