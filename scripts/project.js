// Import the getWeatherData function from the weather.js module
import { getWeatherData } from "./weather.js";

// Get references to the form, input, message span, and list of cities
const form = document.querySelector("form");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".cities");

// Add an event listener to the form for when it is submitted
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  msg.textContent = ""; // Clear any previous error messages

  const inputVal = input.value.trim(); // Get the trimmed value of the input field

  // Check if the city already exists in the list of cities
  const listItems = list.querySelectorAll(".city");
  const existingCity = Array.from(listItems).find((el) => {
    const content = el
      .querySelector(".city-name span")
      .textContent.toLowerCase();
    return content === inputVal.toLowerCase();
  });

  // If the city already exists, display an error message and return
  if (existingCity) {
    msg.textContent = `Weather for ${
      existingCity.querySelector(".city-name span").textContent
    } already showed. Please provide a different city or refresh the page to get updated weather data.`;
    form.reset();
    input.focus();
    return;
  }

  try {
    // Get the weather data for the city using the getWeatherData function
    const data = await getWeatherData(inputVal);
    const { temperature, city, country, description, iconUrl } = data;

    // Create a new list item element with the weather data
    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
  <h2 class="city-name" data-name="${city},${country}">
    <span>${city}</span>
    <sup class="flag-icon flag-icon-${country.toLowerCase()}"></sup>
  </h2>
  <div class="city-temp">${temperature}<sup>°F</sup></div>
  <figure>
    <img class="city-icon" src="${iconUrl}" alt="${description}">
    <figcaption>${description}</figcaption>
  </figure>
`;

    li.innerHTML = markup;
    list.appendChild(li);
  } catch (error) {
    // If there was an error getting the weather data, display an error message
    msg.textContent = `Weather data not found for ${inputVal}. Please search for a valid city`;
  }

  form.reset(); // Reset the form
  input.focus(); // Set focus back to the input field
});
