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

    "[weekday-1]": "Monday",
    "[weekday-2]": "Tuesday",
    "[weekday-3]": "Wednesday",
    "[weekday-4]": "Thursday",
    "[weekday-5]": "Friday",
    "[weekday-6]": "Saturday",
    "[weekday-7]": "Sunday",

    "[month-1]": "January",
    "[month-2]": "February",
    "[month-3]": "March",
    "[month-4]": "April",
    "[month-5]": "May",
    "[month-6]": "June",
    "[month-7]": "July",
    "[month-8]": "August",
    "[month-9]": "September",
    "[month-10]": "October",
    "[month-11]": "November",
    "[month-12]": "December",

    "[month-short-1]": "Jan",
    "[month-short-2]": "Feb",
    "[month-short-3]": "Mar",
    "[month-short-4]": "Apr",
    "[month-short-5]": "May",
    "[month-short-6]": "Jun",
    "[month-short-7]": "Jul",
    "[month-short-8]": "Aug",
    "[month-short-9]": "Sep",
    "[month-short-10]": "Oct",
    "[month-short-11]": "Nov",
    "[month-short-12]": "Dec",
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

    "[weekday-1]": "Понедельник",
    "[weekday-2]": "Вторник",
    "[weekday-3]": "Среда",
    "[weekday-4]": "Четверг",
    "[weekday-5]": "Пятница",
    "[weekday-6]": "Суббота",
    "[weekday-7]": "Воскресенье",

    "[month-1]": "Январь",
    "[month-2]": "Февраль",
    "[month-3]": "Март",
    "[month-4]": "Апрель",
    "[month-5]": "Май",
    "[month-6]": "Июнь",
    "[month-7]": "Июль",
    "[month-8]": "Август",
    "[month-9]": "Сентябрь",
    "[month-10]": "Октябрь",
    "[month-11]": "Ноябрь",
    "[month-12]": "Декабрь",

    "[month-short-1]": "Янв",
    "[month-short-2]": "Фев",
    "[month-short-3]": "Мар",
    "[month-short-4]": "Апр",
    "[month-short-5]": "Май",
    "[month-short-6]": "Июн",
    "[month-short-7]": "Июл",
    "[month-short-8]": "Авг",
    "[month-short-9]": "Сен",
    "[month-short-10]": "Окт",
    "[month-short-11]": "Ноя",
    "[month-short-12]": "Дек",
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

    "[weekday-1]": "Дүйшөмбү",
    "[weekday-2]": "Шейшемби",
    "[weekday-3]": "Шаршемби",
    "[weekday-4]": "Бейшемби",
    "[weekday-5]": "Жума",
    "[weekday-6]": "Ишемби",
    "[weekday-7]": "Жекшемби",

    "[month-1]": "Үчтүн айы",
    "[month-2]": "Бирдин айы",
    "[month-3]": "Жалган Куран",
    "[month-4]": "Чын Куран",
    "[month-5]": "Бугу",
    "[month-6]": "Кулжа",
    "[month-7]": "Теке",
    "[month-8]": "Баш Оона",
    "[month-9]": "Аяк Оона",
    "[month-10]": "Тогуздун айы",
    "[month-11]": "Жетинин айы",
    "[month-12]": "Бештин айы",

    "[month-short-1]": "Үчтүн айы",
    "[month-short-2]": "Бирдин айы",
    "[month-short-3]": "Жалган Куран",
    "[month-short-4]": "Чын Куран",
    "[month-short-5]": "Бугу",
    "[month-short-6]": "Кулжа",
    "[month-short-7]": "Теке",
    "[month-short-8]": "Баш Оона",
    "[month-short-9]": "Аяк Оона",
    "[month-short-10]": "Тогуздун айы",
    "[month-short-11]": "Жетинин айы",
    "[month-short-12]": "Бештин айы",
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
