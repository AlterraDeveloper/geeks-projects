function getMonthes(season) {
  switch (season) {
    case "winter":
      return ["December", "January", "February"];
    case "spring":
      return ["March", "April", "May"];
    case "summer":
      return ["June", "July", "August"];
    case "autumn":
      return ["September", "October", "November"];
  }
}

function getColorBySeason(season) {
  switch (season) {
    case "winter":
      return "#4389c7";
    case "spring":
      return "#0daa1a";
    case "summer":
      return "#e2d407";
    case "autumn":
      return "#e4990f";
  }
}

function getSeasonImagePath(season) {
  return `images/${season}.jpg`;
}

let $seasons = document.querySelectorAll(".seasons button");
let $monthes = document.querySelector(".monthes");
for (const $season of $seasons) {
  $season.addEventListener("click", () => {
    $monthes.innerHTML = "";
    let season = $season.innerText.toLowerCase();
    let monthes = getMonthes(season);
    for (const month of monthes) {
      let $month = document.createElement("button");
      $month.innerText = month;
      $month.style.backgroundColor = getColorBySeason(season);
      $monthes.append($month);
      document.body.style.backgroundImage = `url('${getSeasonImagePath(
        season
      )}')`;
    }
  });
}
