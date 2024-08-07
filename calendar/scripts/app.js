String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.substring(1).toLowerCase();
};

const momentCustomization = {
  week: {
    dow: 1, // Monday
  },
};

const kgMomentCustomization = {
  week: {
    dow: 1,
  },
  months: [
    "Учтун айы", // - январь
    "бирдин айы", // - февраль
    "жалган куран", // - март
    "чын куран", // - апрель
    "бугу", // - май
    "кулжа", // - июнь
    "теке", // - июль
    "баш оона", // - август
    "аяк оона", // - сентябрь
    "тогуздун айы", // - октябрь
    "жетинин айы", // - ноябрь
    "бештин айы", // - декабрь.
  ],
};

function getMomentCustomization(currentLocale) {
  switch (currentLocale) {
    case "ky":
      return kgMomentCustomization;
    default:
      return momentCustomization;
  }
}

// App state
let currentLocalization = "ky";
moment.updateLocale(
  currentLocalization,
  getMomentCustomization(currentLocalization)
);
let currentDate = moment();
let currentTheme = "light";

function renderWeekdays() {
  const weekdaysNames = moment.weekdaysShort(true);
  const calendarWeekdaysContainer =
    document.querySelector(".calendar-weekdays");

  const htmlElements = weekdaysNames.map(function (weekday) {
    const li = document.createElement("li");
    li.innerText = weekday.capitalize();
    return li;
  });

  calendarWeekdaysContainer.innerHTML = "";
  calendarWeekdaysContainer.append(...htmlElements); // append(1,2,3) append(1,2,3)
}

function renderCurrentDate() {
  const calendarCurrentDateContainer = document.querySelector(
    ".calendar-current-date"
  );
  const months = moment.months(true);
  const monthName = months[currentDate.month()].capitalize();
  const year = currentDate.year();
  calendarCurrentDateContainer.innerText = `${monthName} ${year}`;
}

function renderDays() {
  const calendarDaysContainer = document.querySelector(".calendar-dates");
  calendarDaysContainer.innerHTML = "";

  const firstDayInMonth = currentDate.set("date", 1);
  const skipDaysCount = firstDayInMonth.weekday();

  for (let i = 0; i < skipDaysCount; i++) {
    const li = document.createElement("li");
    li.innerText = "";
    calendarDaysContainer.append(li);
  }

  const daysInMonth = currentDate.daysInMonth();
  const dateNow = moment();
  for (let i = 1; i <= daysInMonth; i++) {
    const li = document.createElement("li");
    li.innerText = i.toString();
    if (
      currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") &&
      dateNow.date() === i
    ) {
      li.className = "active";
    }
    calendarDaysContainer.append(li);
  }
}

function changeLanguageHandler(event) {
  const selectedLang = event.target.id.slice(-2);
  currentLocalization = selectedLang;
  moment.updateLocale(
    currentLocalization,
    getMomentCustomization(currentLocalization)
  );
  renderCalendar();
}

function renderLanguages() {
  const languageButtons = document.querySelectorAll("input[type=radio]");
  const [ruButton, kgButton, enButton] = [...languageButtons];

  switch (currentLocalization) {
    case "en":
      enButton.checked = true;
      break;
    case "ru":
      ruButton.checked = true;
      break;
    case "ky":
      kgButton.checked = true;
      break;
  }

  for (const button of languageButtons) {
    button.removeEventListener("change", changeLanguageHandler);
    button.addEventListener("change", changeLanguageHandler);
  }
}

function renderTheme() {
  const calendarContainer = document.querySelector(".calendar-container");
  const themeContainer = document.querySelector(".theme__label");
  const themeIcon = themeContainer.querySelector("img");

  if (currentTheme === "dark") {
    calendarContainer.classList.add("darkmode");
    themeContainer.classList.add("darkmode");
    themeIcon.style.content = "url('images/light.png')";
  } else {
    calendarContainer.classList.remove("darkmode");
    themeContainer.classList.remove("darkmode");
    themeIcon.style.content = "url('images/dark.png')";
  }

  const themeInput = themeContainer.querySelector("input[type=checkbox]");

  themeInput.removeEventListener("change", changeThemeHandler);
  themeInput.addEventListener("change", changeThemeHandler);
}

function changeThemeHandler(event) {
  const isDarkMode = event.target.checked;
  currentTheme = isDarkMode ? "dark" : "light";
  renderCalendar();
}

function renderCalendar() {
  renderCurrentDate();
  renderWeekdays();
  renderDays();
  renderLanguages();
  renderTheme();
}

renderCalendar();

const [prevBtn, nextBtn] = [
  ...document.querySelectorAll(".calendar-navigation span"),
];

prevBtn.onclick = () => {
  currentDate.subtract(1, "month");
  renderCalendar();
};

nextBtn.onclick = () => {
  currentDate.add(1, "month");
  renderCalendar();
};
