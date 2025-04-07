const $currentMonthText = document.querySelector(".header h1");
const $currentDateDay = document.querySelector("#current-day");
const $currentDateMonth = document.querySelector("#current-month");
const $currentDateYear = document.querySelector("#current-year");
const $currentDateWeekday = document.querySelector("#current-weekday");
const $weekdaysContainer = document.querySelector(".weekdays");
const $daysContainer = document.querySelector(".days");

const currentDate = new Date();
for (let i = 0; i < getEmptiesCount(currentDate); i++) {
  const div = document.createElement("div");
  $daysContainer.append(div);
}

for (let day = 1; day <= getDaysInMonth(currentDate); day++) {
  const div = document.createElement("div");
  div.classList.add("day");
  if (day === currentDate.getDate()) {
    div.classList.add("current");
  }
  div.innerText = day;
  $daysContainer.append(div);
}

$currentMonthText.dataset.t = `[month-${currentDate.getMonth() + 1}]`;
$currentDateDay.textContent = currentDate.getDate();
$currentDateMonth.dataset.t = `[month-short-${currentDate.getMonth() + 1}]`;
$currentDateYear.textContent = currentDate.getFullYear();
$currentDateWeekday.dataset.t = `[weekday-${currentDate.getDay()}]`;

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

function getFirstDayInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getEmptiesCount(date) {
  const firstDay = getFirstDayInMonth(date);
  return firstDay.getDay() - 1;
}

function translatePage(lang = "eng") {
  const translatedElements = document.querySelectorAll("[translate]");
  let targetLang = null;
  switch (lang) {
    case "eng":
      targetLang = getEngLang();
      break;
    case "rus":
      targetLang = getRusLang();
      break;
    case "kgz":
      targetLang = getKgzLang();
      break;
  }
  for (const element of translatedElements) {
    const translateCode = element.dataset.t;
    const translation = targetLang[translateCode];
    if (translation) {
      element.textContent = translation;
    }
  }
}

function getEngLang() {
  const lang = {
    "[weekday-short-1]": "Mon",
    "[weekday-short-2]": "Tue",
    "[weekday-short-3]": "Wed",
    "[weekday-short-4]": "Thu",
    "[weekday-short-5]": "Fri",
    "[weekday-short-6]": "Sat",
    "[weekday-short-7]": "Sun",

    "[month-4]": "April",

    "[month-short-4]": "Apr",

    "[weekday-1]": "Monday",
  };
  return lang;
}

function getRusLang() {
  const lang = {
    "[weekday-short-1]": "Пн",
    "[weekday-short-2]": "Вт",
    "[weekday-short-3]": "Ср",
    "[weekday-short-4]": "Чт",
    "[weekday-short-5]": "Пт",
    "[weekday-short-6]": "Сб",
    "[weekday-short-7]": "Вс",

    "[month-4]": "Апрель",

    "[month-short-4]": "Апр",

    "[weekday-1]": "Понедельник",
  };
  return lang;
}

function getKgzLang() {
  const lang = {
    "[weekday-short-1]": "Дүй",
    "[weekday-short-2]": "Шей",
    "[weekday-short-3]": "Шар",
    "[weekday-short-4]": "Бей",
    "[weekday-short-5]": "Жум",
    "[weekday-short-6]": "Ише",
    "[weekday-short-7]": "Жек",

    "[month-4]": "Чын Куран",

    "[month-short-4]": "чын куран",

    "[weekday-1]": "Дүйшөмбү",
  };
  return lang;
}

const langInputs = document.querySelectorAll(".languages input[type=radio]");
const defaultLangInput = document.querySelector(
  ".languages input[type=radio]:checked"
);
translatePage(defaultLangInput.value);
langInputs.forEach((li) => {
  li.onchange = () => {
    translatePage(li.value);
  };
});
