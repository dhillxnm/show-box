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
