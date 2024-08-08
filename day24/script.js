async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'paste-our-api-key-here'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found!');
            return;
        }

        const cityName = data.name;
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById('cityName').textContent = cityName;
        document.getElementById('weatherDescription').textContent = weatherDescription;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('weatherIcon').src = icon;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
