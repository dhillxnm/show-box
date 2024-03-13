# ShowBox

Welcome to our streaming website project, where we aim to create an immersive and enjoyable streaming experience akin to popular platforms like Netflix. This README serves as a guide to understanding the project structure, functionality, and how to set it up locally.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)
5. [Contributing](#contributing)

## Introduction

Our streaming website project is designed to provide users with a seamless streaming experience, allowing them to discover, watch, and enjoy a wide range of content including movies, TV shows, documentaries, and more. With a user-friendly interface and a vast library of content, we aim to cater to diverse preferences and interests.

## Features

- _User Authentication_: Users can create accounts, log in, and securely authenticate themselves.
- _Content Discovery_: Users can browse through various categories, genres, and recommendations to discover new content.
- _Streaming_: Seamless streaming experience with high-quality video playback.
- _Search Functionality_: Users can search for specific titles, actors, or genres to find content quickly.
- _Personalization_: Recommendation algorithms provide personalized content suggestions based on user preferences and viewing history.
- _Multiple Device Support_: Accessible across multiple devices including desktops, laptops, tablets, and smartphones.
- _Subscription Management_: Users can manage their subscription plans, including upgrading or canceling subscriptions.
- _Admin Panel_: Administrators can manage content, users, and subscriptions through an intuitive admin panel.
- _Responsive Design_: The website is designed to be responsive and accessible across various screen sizes and devices.

## Technologies Used

- _Frontend_: HTML5, CSS3, JavaScript
- _Deployment_: AWS, Google Cloud Platform, Heroku, or other cloud hosting services
- _Version Control_: Git, GitHub
- VS-code

## Usage

- Create an account or log in if you already have one.
- Browse through the available content using categories, genres, or search functionality.
- Click on a title to view details and start streaming.

```Javascript (popup signin)

const headerSigninbutton = document.querySelector('.header-button');
const getStartedinput = document.querySelector('.landing-email-input');
const getStartedbutton = document.querySelector('.landing-email-submit');
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

```

## Contributions

Manpreet kaur
contact: click (here)[https://github.com/dhillxnm]

Abdul Malik
contac: click (here)[https://github.com/aolumoh]
