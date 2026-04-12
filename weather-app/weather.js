/// State variables
let is_loading = true;
let error_message = "";
let weather_data = null;
let repos = [];

/// Selecting output container
const output_element = document.getElementById("weather-output");

/// Correct UI based on state
async function renderWeather() {
  output_element.classList.remove("isloading", "errormessage");

  if (is_loading) {
    output_element.classList.add("isloading");
    output_element.textContent = "Loading...";
  } else if (error_message) {
    output_element.classList.add("errormessage");
    output_element.textContent = error_message;
  } else if (weather_data) {
    output_element.innerHTML = `<span class="temperature">${weather_data.properties.periods[0].temperature}°</span> with ${weather_data.properties.periods[0].shortForecast}.`;
  } else {
    output_element.className = "weather-output --fallback";
    output_element.innerHTML = "-weather data not available.";
  }
}

/// Fetch weather data from API
async function getWeather() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    weather_data = data;
  } catch (error) {
    error_message = `Failed to fetch weather data: ${error.message}`;
    console.error("Error fetching weather data:", error);
  } finally {
    is_loading = false;
    renderWeather();
  }
}

/// Initial fetch of weather data when the page loads ///
getWeather();

/// refreshing the data to make sure it is always recent-ish ///
setInterval(getWeather, 10 * 60 * 1000);
