// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var reveal_location = city_country("Karachi", "Pakistan");
console.log(reveal_location);
reveal_location = city_country("Murree", "Pakistan");
console.log(reveal_location);
reveal_location = city_country("Islamabad", "Pakistan");
console.log(reveal_location);
