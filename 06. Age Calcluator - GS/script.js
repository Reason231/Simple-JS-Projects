const result = document.getElementById("result")
let userInput = document.getElementById("date")
// It won't let us select tomorrow or any future date
userInput.max = new Date().toISOString().split("T")[0]

function calculateAge() {
    let birthDate = new Date(userInput.value)

    let birthDay = birthDate.getDate()
    let birthMonth = birthDate.getMonth() + 1 //Making 12 cause its inital value is 0
    let birthYear = birthDate.getFullYear()

    let today = new Date()
    
    let currDay = today.getDate()
    let currMonth = today.getMonth() + 1
    let currYear = today.getFullYear()

    let yearOld, monthOld, dateOld;

    // Year age
    yearOld = currYear - birthYear

    // Month age
    if (currMonth >= birthMonth) {
        monthOld = currMonth - birthMonth
    } else {
        // If today's month is less than the birth Month then it would be negative if we do currMonth-birthMonth
        yearOld-- 
        monthOld = 12 + currMonth - birthMonth
    }

    // Date age
    if (currDay >= birthDay) {
        dateOld = currDay - birthDay
    } else {
        monthOld-- // Subtract a month if birth day hasn't occurred yet
        dateOld = getDaysInMonth(currYear, currMonth - 1) + currDay - birthDay // Adjust for the previous month days
    }

    // It calculates the days of a given Month and Specific Year
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate()
    }
    
    // If the month count is less than 0, adjust the year and set the month count to 11
    if (monthOld < 0) {  // 0 represnets the January
        monthOld = 11 // 11 represents the Deecember
        yearOld--
    }

    // Result
    result.innerHTML = `You are ${yearOld} years, ${monthOld} months, and ${dateOld} days old`
}
