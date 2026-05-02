const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;

    // Close all others
    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) {
        a.style.maxHeight = null;
      }
    });

    // Toggle current
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});