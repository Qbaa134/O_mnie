async function getLocationData() {
    const location = document.getElementById('locationInput').value;

    // Pobieranie danych o lokalizacji
    const locationResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=YOUR_API_KEY`);
    const locationData = await locationResponse.json();
    const { lat, lon } = locationData.features[0].geometry;

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
        <p>Currency Rate (USD to ${currencyData.base}): ${currencyData.rates[locationData.features[0].properties.currency]}</p>
    `;
}
