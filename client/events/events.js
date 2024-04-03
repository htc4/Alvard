// events.js

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let calendar = document.getElementById("calendar");
let prevMonthBtn = document.getElementById("prevMonth");
let nextMonthBtn = document.getElementById("nextMonth");
let monthYearHeader = document.getElementById("monthYear");

function renderCalendar(year, month) {
    calendar.innerHTML = "";
    monthYearHeader.innerHTML = monthNames[month] + " " + year;

    let daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        let listItem = document.createElement("li");
        let timeElement = document.createElement("time");
        timeElement.setAttribute("datetime", year + "-" + (month + 1).toString().padStart(2, '0') + "-" + i.toString().padStart(2, '0'));
        timeElement.textContent = i;

        // Add inner HTML content for specific days
        if ((month === 3 && i === 4) ) {
            listItem.innerHTML = "<p>Birthday Ani</p>";
        } else if ((month === 3 && i === 5) || (month === 3 && i === 8) || (month === 3 && i === 9) || (month === 3 && i === 20) || (month === 3 && i === 22)) {
            listItem.innerHTML = "<p>Wine Day for your gost</p>";
        }
        else if((month === 2 && i === 5) || (month === 2 && i === 8) || (month === 2 && i === 9)){
            listItem.innerHTML = "<p>Happy Day for drink wine</p>";
        }

        // Highlight Wine Day (example: 27th day of the month)
        if (i === 27) {
            listItem.classList.add("wine-day");
        }

        // Highlight current day
        if (i === currentDay && month === currentMonth && year === currentYear) {
            timeElement.classList.add("current-day");
        }

        listItem.appendChild(timeElement);
        calendar.appendChild(listItem);
    }
}

renderCalendar(currentYear, currentMonth);

prevMonthBtn.addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
    updateStyles();
});

nextMonthBtn.addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
    updateStyles();
});

function updateStyles() {
    let now = new Date();
    let nowDay = now.getDate();
    let nowMonth = now.getMonth();
    let nowYear = now.getFullYear();

    // Update color of current month and year text
    if (nowMonth === currentMonth && nowYear === currentYear) {
        monthYearHeader.style.color = "red"; // Change to any color you prefer
    } else {
        monthYearHeader.style.color = ""; // Reset color
    }

    // Update color of current day text
    let days = document.querySelectorAll(".calendar li time");
    days.forEach(function(day) {
        let dayNumber = parseInt(day.textContent);
        if (dayNumber === nowDay && currentMonth === nowMonth && currentYear === nowYear) {
            day.classList.add("current-day");
        } else {
            day.classList.remove("current-day");
        }
    });
}
