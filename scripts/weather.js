// Set the API key and URL for the OpenWeatherMap API
const apiKey = "683d8777c5fe0c23e31a0351d50faa45";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Define a function to get the weather data for a given city
export async function getWeatherData(city) {
  // Construct the URL for the API request using the city and API key
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    // Make a request to the API using the constructed URL
    const response = await fetch(url);

    // If the response is not OK (i.e., the status code is not in the 200-299 range), throw an error
    if (!response.ok) {
      throw new Error("Weather data not found");
    }

    // Parse the response as JSON and extract the necessary data
    const { main, name, sys, weather } = await response.json();

    // Construct the URL for the weather icon using the icon code from the API response
    const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    // Return an object with the extracted weather data
    return {
      temperature: Math.round(main.temp),
      city: name,
      country: sys.country,
      description: weather[0].description,
      iconUrl: iconUrl,
    };
  } catch (error) {
    // If there was an error getting the weather data, throw an error
    throw new Error("Unable to fetch weather data");
  }
}
