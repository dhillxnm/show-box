'use strict';

// Utility function
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

// main code
const contact = select('#contact');
const dialog = select('#contact-frame');
const overlay = select('#overlay');
const alert = select('#alert');
const fullName = select('#name');
const email = select('#email');
const message = select('#message');
const button = select('#contact-btn');
let isVisible = false;
