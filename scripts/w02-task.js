/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
// 1.4 Place an image of yourself in the images folder

/* Step 2 - Variables */
// 2.1 - Declare a variable called fullName and assign it your full name
const fullName = "Miguel Angel Lopez Hernandez";
// 2.2 - Declare a variable called currentYear and assign it the current year
const currentYear = 2023;
// 2.3 - Declare a variable called profilePicture and assign it the path to an image of 1.4
const profilePicture = "images/MALH.jpeg";


/* Step 3 - Element Variables */
// 3.1 - Declare a variable called nameElement and assign it the element with the id of name
const nameElement = document.getElementById("name");
// 3.2 - Declare a variable called foodElement and assign it the element with the id of food
const foodElement = document.getElementById("food");
// 3.3 - Declare a variable called yearElement and assign it the element with the selector of #year
const yearElement = document.querySelector("#year");
// 3.4 - Declare a variable called imageElement and assign it the image element 
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
// 4.1/4.2 - Replace the innerHTML of nameElement with the value of fullName surrounded by <strong> tags
nameElement.innerHTML = `<strong>${fullName}</strong>`;
// 4.3 - Replace the textContent property of yearElement with the value of currentYear
yearElement.textContent = currentYear;
// 4.4 - Set the src attribute of imageElement to the value of profilePicture
imageElement.setAttribute("src", profilePicture);
// 4.5 - Set the alt attribute of imageElement to the value of fullName, using template literals
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
// 5.1 - Declare a variable called favFoods and assign it an array of your favorite foods
let favFoods = ["Tacos", "Enchiladas", "Pozole", "Tamales", "Mole"];
// 5.2 - Replace the innerHTML of foodElement with the elements of favFoods separated by a comma and a space
foodElement.innerHTML = favFoods.join(", ");
// 5.3 - Declare a variable called anotherFavFood and assign it a food you like
let anotherFavFood = "Pizza";
// 5.4 - Add anotherFavFood to the end of favFoods
favFoods.push(anotherFavFood);
// 5.5 - Replace the innerHTML of foodElement with the elements of updated favFoods prepending a br tag
foodElement.innerHTML += `<br>${favFoods}`;
// 5.6 - Remove the first element of favFoods
favFoods.shift();
// 5.7 - Same as 5.5
foodElement.innerHTML += `<br>${favFoods}`;
// 5.8 - Remove the last element of favFoods
favFoods.pop();
// 5.9 - Same as 5.5
foodElement.innerHTML += `<br>${favFoods}`;





