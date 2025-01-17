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
        }
        star.ondblclick = function(){
            StarRating(0);
        }
    }
}

function blowConfetti() {
    confetti({
        particleCount: 200,
        angle: 60,
        spread: 220,
        origin: {x: 0},
    });

    confetti({
        particleCount: 200,
        angle: 120,
        spread: 220,
        origin: {x: 1},
    });

}

StarRating();