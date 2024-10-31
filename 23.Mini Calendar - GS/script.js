const newDate = new Date();
const currDate = newDate.getDate();
const currDay = newDate.getDay();
const currMonth = newDate.getMonth();
const currYear = newDate.getFullYear();

// Arrays for day and month names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Get day and month names
const dayName = dayNames[currDay];
const monthName = monthNames[currMonth];

// Set innerHTML for each element
document.getElementById("date").innerHTML = `${currDate}`;
document.getElementById("day").innerHTML = `${dayName}`;
document.getElementById("month").innerHTML = `${monthName}`;
document.getElementById("year").innerHTML = `${currYear}`;
