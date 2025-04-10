const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const title = document.getElementById("title");

function updateCountdown() {
  const now = moment();
  const eventDate = getNextSummer();
  const duration = moment.duration(eventDate.diff(now));

  days.innerHTML = String(Math.floor(duration.asDays())).padStart(2, "0");
  hours.innerHTML = String(Math.floor(duration.hours())).padStart(2, "0");
  minutes.innerHTML = String(Math.floor(duration.minutes())).padStart(2, "0");
  seconds.innerHTML = String(Math.floor(duration.seconds())).padStart(2, "0");

  title.innerHTML = `Summer ${eventDate.year()}`;
}

function getNextSummer() {
  const now = moment();
  let summerStart = moment(`${now.year()}-06-01T00:00:00Z`);
  if (now.isAfter(summerStart)) {
    summerStart.add(1, "year");
  }
  return summerStart;
}

setInterval(updateCountdown, 1000);
