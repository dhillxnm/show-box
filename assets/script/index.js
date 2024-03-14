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
const button = select('#contact-btn');
const message = document.getElementById('message');
let isVisible = false;

function clearForm() {
  fullName.value = '';
  email.value = '';
  message.value = '';
}

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

// Function that displays hero text on page load
onEvent('load', window, function() {
    message.classList.toggle('visible');

    this.innerText = message.classlist.contains('visible')?
        'Hide message' : 'Show message'

});