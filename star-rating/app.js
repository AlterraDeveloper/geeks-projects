// <div class="fa fa-star "></div>
function Star(isChecked, position) {
  const div = document.createElement("div");
  div.className = "fa fa-star";
  if (isChecked) {
    // div.className += " checked";
    div.classList.add("checked");
  }
  div.id = "star-" + position;
  return div;
}

const stars = document.querySelector(".stars");
const ratingValue = document.querySelector(".rating-value");
const ratingText = document.querySelector(".label-description");

function StarRating(rating = 0) {
  stars.innerHTML = "";
  const maxRating = 5;
  for (let i = 0; i < maxRating; i++) {
    const star = Star(i < rating);
    stars.append(star);
    star.onclick = function () {
      const starPosition = i + 1;
      StarRating(starPosition);
      if (starPosition === maxRating) {
        blowConfetti();
      }
    };
    star.oncontextmenu = function (event) {
      event.preventDefault();
      StarRating(0);
    };

    star.onmouseover = () => {
        console.log("Mouseover", rating);
        
      switch (i+1) {
        case 1:
          ratingText.dataset.content = "Terrible";
          break;
        case 2:
          ratingText.dataset.content = "Bad";
          break;
        case 3:
          ratingText.dataset.content = "OK";
          break;
        case 4:
          ratingText.dataset.content = "Good";
          break;
        case 5:
          ratingText.dataset.content = "Excellent";
          break;
      }
    };

    star.onmouseleave = () => {
      ratingText.dataset.content = "";
    };
  }
  ratingValue.dataset.value = rating;
}

function blowConfetti() {
  confetti({
    particleCount: 200,
    angle: 60,
    spread: 220,
    origin: { x: 0 },
  });

  confetti({
    particleCount: 200,
    angle: 120,
    spread: 220,
    origin: { x: 1 },
  });
}

StarRating();
