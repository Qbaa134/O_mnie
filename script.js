async function getLocationData() {
    const location = document.getElementById('locationInput').value;
    const apiKeyGeoapify = '63e6c1e4be2b42439c339be6ba981db9';
    const apiKeyWeather = 'YOUR_WEATHER_API_KEY';

    // Pobieranie danych o lokalizacji
    const locationResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=${apiKeyGeoapify}`);
    const locationData = await locationResponse.json();

    if (locationData.features.length === 0) {
        document.getElementById('results').innerHTML = '<p>No location found!</p>';
        return;
    }

    const { lat, lon } = locationData.features[0].geometry.coordinates;

    // Pobieranie danych pogodowych
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const weatherData = await weatherResponse.json();

    // Pobieranie kursów walut
    const currencyResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const currencyData = await currencyResponse.json();

    // Wyświetlanie danych
    document.getElementById('results').innerHTML = `
        <h2>${location}</h2>
        <p>Latitude: ${lat}, Longitude: ${lon}</p>
        <p>Current Weather: ${weatherData.current_weather.temperature}°C</p>
        <p>Currency Rate (USD to local): ${currencyData.rates[locationData.features[0].properties.currency]}</p>
    `;
}
