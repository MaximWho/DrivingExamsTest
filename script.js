document.getElementById('checkButton').addEventListener('click', function(event) {
    let correctAnswers = 0;
    const totalQuestions = 108;
    const correctAnswersArray = [
        'a', 'c', 'c', 'a', 'a', 'b', 'd', 'c', 'c', 'a',
        'c', 'a', 'c', 'd', 'a', 'a', 'c', 'a', 'a', 'a',
        'c', 'c', 'c', 'd', 'b', 'a', 'c', 'c', 'b', 'd',
        'a', 'd', 'd', 'd', 'c', 'a', 'b', 'c', 'a', 'a',
        'b', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'b', 'b',
        'b', 'a', 'a', 'b', 'b', 'b', 'b', 'a', 'b', 'b',
        'a', 'b', 'a', 'b', 'b', 'a', 'a', 'a', 'b', 'b',
        'b', 'a', 'b', 'b', 'b', 'b', 'a', 'a', 'b', 'b',
        'b', 'b', 'a', 'b', 'b', 'a', 'a', 'b', 'a', 'a',
        'a', 'b', 'b', 'b', 'b', 'a', 'a', 'b', 'b', 'b', 'b'
    ];
    let selectedAnswersArray = [];
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="Group${i}"]:checked`);
        if (selectedAnswer) {
            selectedAnswersArray.push(selectedAnswer.value);
            if (selectedAnswer.value === correctAnswersArray[i - 1]) {
                correctAnswers++;
            }
        }
    }
    const percentageCorrect = (correctAnswers / totalQuestions) * 100;
    if (percentageCorrect >= 30) {
        window.location.href = `success.html?correct=${correctAnswers}&total=${totalQuestions}&correctAnswers=${correctAnswersArray}&selectedAnswers=${selectedAnswersArray}`;
    } else {
        window.location.href = `fail.html?correct=${correctAnswers}&total=${totalQuestions}&correctAnswers=${correctAnswersArray}&selectedAnswers=${selectedAnswersArray}`;
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});
