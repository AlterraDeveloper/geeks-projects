const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        const activeQuestion = document.querySelector(".question.show-text");

        if (activeQuestion && activeQuestion !== question) {
            activeQuestion.classList.remove("show-text");
        }
        question.classList.toggle("show-text");
    });
});
