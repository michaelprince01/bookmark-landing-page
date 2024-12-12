const tabs = document.querySelectorAll('.features-tabs a');
const tabContents = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    // Deactivate all tabs and tab contents
    tabs.forEach((t) => t.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    // Activate the clicked tab and its corresponding content
    this.classList.add('active');
    const targetTab = this.getAttribute('data-tab');
    document.querySelector(`.tab${targetTab}`).classList.add('active');
  });
});

// Ensure all answers are closed on page refresh
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-answer').forEach((answer) => {
    answer.classList.remove('show');
  });
  document.querySelectorAll('.icon').forEach((icon) => {
    icon.classList.remove('rotate');
    icon.querySelector('img').classList.remove('active');
  });
});

// Code for the FAQ section
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.icon');
    const iconImg = icon.querySelector('img');

    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach((ans) => {
      if (ans !== answer) ans.classList.remove('show');
    });
    document.querySelectorAll('.icon').forEach((otherIcon) => {
      if (otherIcon !== icon) {
        otherIcon.classList.remove('rotate');
        otherIcon.querySelector('img').classList.remove('active');
      }
    });

    // Toggle the clicked answer
    answer.classList.toggle('show');
    icon.classList.toggle('rotate');
    iconImg.classList.toggle('active');
  });
});
