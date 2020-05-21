const questions = document.querySelectorAll('.question');
questions.forEach(questionTab => {
  questionTab.onclick = () => {
    questionTab.classList.toggle('active');
    const answerPanel = questionTab.nextElementSibling;
    console.log(answerPanel);
    if (answerPanel.style.maxHeight) {
      answerPanel.style.maxHeight = null;
    } else {
      answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
    }
  }
});