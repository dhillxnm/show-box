'use strict';

// Basic utility function
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function print(arg) {
  console.log(arg);
}

// Basic Popup function
const contact = select('#contact');
const dialog = select('#contact-frame');
const overlay = select('#overlay');
const alert = select('#alert');
const fullName = select('#name');
const email = select('#email');
const message = select('#message');
const button = select('#contact-btn');
let isVisible = false;

function showDialog() {
  dialog.classList.add('isvisible');
  overlay.classList.add('isvisible');
  isVisible = true;
}

function hideDialog() {
  dialog.classList.remove('isvisible');
  overlay.classList.remove('isvisible');
  isVisible = false;
}

onEvent('load', window, function() {
  clearForm();
});

onEvent('click', contact, function() {
  showDialog()
});

onEvent('click', overlay, function() {
  if (isVisible) hideDialog();
});

onEvent('keyup', document, function(event) {
  if (isVisible && event.key === 'Escape') {
    hideDialog();
  }
});

onEvent('click', button, function() {
  alert.classList.add('isvisible');
  hideDialog();
  setTimeout(function() {
    alert.classList.remove('isvisible');
    clearForm();
  }, 5500);
});

// Language Changer

// const languageSelect = document.getElementById('language');
// const unlimited = document.getElementById('unlimited');

// languageSelect.addEventListener('change', function() {
//   if (languageSelect.value === 'french') {
//     unlimited.innerText = 'Films, émissions de télévision et plus illimités';
//   } else {
//     unlimited.innerText = 'Unlimited movies, TV shows, and more';
//   }
// })

// //==================================================

// const english = {
//     'Unlimited movies, TV shows, and more': 'Unlimited movies, TV shows, and more',
//     'Starts at $5.99. Cancel anytime.': 'Starts at $5.99. Cancel anytime.',
//     'Ready to watch? SIGN IN or restart your membership.': 'Ready to watch? SIGN IN or restart your membership.',
//     'Trending Now': 'Trending Now',
//     'More Reasons to join': 'More Reasons to join',
//     'Enjoy on your TV': 'Enjoy on your TV',
//     'Download your shows to watch offline': 'Download your shows to watch offline',
//     'Watch everywhere': 'Watch everywhere',
//     'Create profiles for kids': 'Create profiles for kids',
//     'Ready to watch? Enter your email to create or restart your membership.': 'Ready to watch? Enter your email to create or restart your membership.',
//     'Questions? Call 1-733-834-7734': 'Questions? Call 1-733-834-7734'
// }

// const french = {
//     'Unlimited movies, TV shows, and more': 'Films, séries TV et plus en illimité',
//     'Starts at $5.99. Cancel anytime.': 'Commence à 5,99 $ CA. Annulez quand vous voulez.',
//     'Ready to watch? SIGN IN or restart your membership.': 'Prêt à regarder? CONNECTEZ-VOUS ou redémarrez votre abonnement.',
//     'Trending Now': 'Tendance actuelle',
//     'More Reasons to join': 'Plus de raisons de vous inscrire',
//     'Enjoy on your TV': 'Profitez de votre téléviseur',
//     'Download your shows to watch offline': 'Téléchargez vos émissions pour les regarder hors ligne',
//     'Watch everywhere': 'Regardez partout',
//     'Create profiles for kids': 'Créez des profils pour les enfants',
//     'Ready to watch? Enter your email to create or restart your membership.': 'Prêt à regarder? Entrez votre adresse e-mail pour créer ou redémarrer votre abonnement.',
//     'Questions? Call 1-733-834-7734': 'Des questions? Appelez le 1-733-834-7734'
// }

// const sentenceArray = document.querySelectorAll('h1, h4, p, a, span, option');

// function updateTextContent(language){
//   if (languageSelect.value === 'french')
//   sentenceArray.forEach(element => {
//     element.innerText = sentenceArray[]
//   });
// }