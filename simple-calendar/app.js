

const $currentMonthText = document.querySelector(".header h1");
const $currentDateText = document.querySelector(".header h2");
const $weekdaysContainer = document.querySelector(".weekdays");
const $daysContainer = document.querySelector(".days");


const currentDate = new Date();
for(let i = 0; i < getEmptiesCount(currentDate); i++){
    const div = document.createElement("div");
    $daysContainer.append(div);
}

for(let day = 1; day <= getDaysInMonth(currentDate); day++){
    const div = document.createElement("div");
    div.classList.add("day");
    if(day === currentDate.getDate()){
        div.classList.add("current");
    }
    div.innerText = day;
    $daysContainer.append(div);
}

$currentMonthText.innerText = currentDate.toLocaleString("MMMM");
$currentDateText.innerText = currentDate.toLocaleString("DDDD MMM DD YYYY");


function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
}

function getFirstDayInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1); 
}

function getEmptiesCount(date){
    const firstDay = getFirstDayInMonth(date);
    return firstDay.getDay() - 1;
}
