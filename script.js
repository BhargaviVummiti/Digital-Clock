//update clock
function updateClock() {
    const clock = document.getElementById("clock");
    const dateDisplay = document.getElementById("date");


    const date = new Date();

    //get time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; //12-hours format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

    //Get date

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    dateDisplay.textContent = `${dayName},${monthName} ${day},${year}`;
}
//update time every second
setInterval(updateClock, 1000);
updateClock();

//themeToggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

if (document.body.classList.contains("light")) {
    themeToggle.textContent = "Dark Mode";
} else {
    themeToggle.textContent = "Light Mode";
}

});