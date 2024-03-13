'use strict';

//  *** Global constants  ***
const headerSigninbutton = document.querySelector('.header-button');
const headTag = document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");



let signinDialog = false;
headerSigninbutton.addEventListener('click', function() {
    if (!signinDialog){
        styleTag.innerHTML = `
        .sign-in-menu {
          display: none;
        }
        .secondary-hero-text {
          display: none;
        }
        .dialog-container {
          display: block;
        }
        `;
        headTag.appendChild(styleTag);
        signinDialog = true;
    } 
    else{
        styleTag.innerHTML = ``;
        signinDialog = false;
    }
});


