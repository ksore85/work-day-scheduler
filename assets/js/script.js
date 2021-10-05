// Show current date
const currentHour = moment().format("k");
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const currentDateElement = document.querySelector("#currentDay");
currentDateElement.textContent = currentDate;
