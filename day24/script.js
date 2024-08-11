// Updated fetchWeatherForecast function without spinner logic
async function fetchWeatherForecast(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('Unable to fetch weather data. Please try again.');
    }
}

// Function to display the 5-day weather forecast on the page
function displayForecast(data) {
    const weatherDetails = document.getElementById('weather-details');
    const list = data.list;

    if (list && list.length > 0) {
        let forecastHTML = '<h3>5-Day Forecast:</h3>';
        
        // Process the forecast data
        list.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            const temperature = item.main.temp;
            const condition = item.weather[0].description;
            const icon = item.weather[0].icon; // Get icon code

            forecastHTML += `
                <div class="forecast-item">
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Temperature:</strong> ${temperature}°C</p>
                    <p><strong>Condition:</strong> ${condition}</p>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${condition}" class="weather-icon">
                </div>
            `;
        });

        weatherDetails.innerHTML = forecastHTML;
        // Trigger transition effect
        weatherDetails.classList.add('show');
    } else {
        displayError('Weather forecast data is incomplete.');
    }
}

// Function to display error messages
function displayError(message) {
    const weatherDetails = document.getElementById('weather-details');
    weatherDetails.innerHTML = `<p>${message}</p>`;
    // Ensure no transition effect is triggered on error
    weatherDetails.classList.remove('show');
}

// Handle form submission
document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetchWeatherForecast(city);
    } else {
        displayError('Please enter a city name.');
    }
});
