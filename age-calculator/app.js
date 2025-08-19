const ageCalculate = () => {
  const today = moment();
  const birthDate = moment(
    document.getElementById("date-input").value,
    "YYYY-MM-DD"
  );

  if (!birthDate.isValid()) {
    Swal.fire({
      title: "Invalid date!",
      icon: "warning",
    });
    return;
  }

  if (birthDate > today) {
    Swal.fire({
      title: "Choose date in the past!",
      icon: "warning",
    });
    return;
  }

  const ageDiff = moment.duration(today.diff(birthDate));

  const { years, months, days } = {
    years: Math.floor(ageDiff.asYears()),
    months: ageDiff.months(),
    days: ageDiff.days(),
  };

  displayResult(days, months, years);
};

const displayResult = (bdate, bMonth, bYear) => {
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent = bMonth;
  document.getElementById("days").textContent = bdate;
};

document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);
