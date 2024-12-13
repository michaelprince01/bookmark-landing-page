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

// Code for the email-subscription section
document
  .getElementById('email-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email-input');
    const errorIcon = document.getElementById('error-icon');
    const tooltip = document.getElementById('tooltip');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add('error');
      errorIcon.classList.add('error');
      tooltip.classList.add('active');
    } else {
      emailInput.classList.remove('error');
      errorIcon.classList.remove('error');
      tooltip.classList.remove('active');
      alert('Thank you for subscribing!');
      emailInput.value = '';
    }
  });

// responsiveness code
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menu = document.querySelector('.navbar');

menuOpen.addEventListener('click', () => {
  menu.classList.add('active');
  menuClose.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});
