# book-search-engine

This is a MERN book search and save app built with a GraphQL server.
Live demo [_here_](https://google-books-search-save-app.herokuapp.com/).

## Table of Contents

- [General Info](#general-information)
- [Installation](#installation)
- [Usage](#usage)
- [Appearance](#appearance)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Project Status](#project-status)
- [Contact](#contact)
- [License](#license)

## General Information

The purpose of this task was to take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with an Apollo Server. This app is built using the MERN stack. It was already set up to allow users to save book searches to the back end. This task involved the following:

- Setting up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
- Modifying RESTful API authentication middleware so that it works in the context of a GraphQL API.
- Created an Apollo Provider so that requests can communicate with an Apollo Server.

## Installation

​Install dependencies using:

    npm install

## Usage

Need to have MongoDB and MongoDB Compass installed locally to run the app. Alternatively, you can also refer to the live app.

The application will then be invoked by using the following command:

    npm run develop

## Appearance

Below depicts functionality of the main app features:

![Full page view of portfolio](./assets/readme.gif)

## Technologies Used

- GraphQL
- MongoDB
- Express.js
- React
- Node.js

## Setup

- Text editor (VS Code recommended)
- An Internet browser (Google Chrome recommended)
- MongoDB and MongoDB to be locally installed
- MongoDB Atlas for live deployment
- Heroku

## Project Status

Project is: complete.

## Contact

Created by -[@moedaaboul](https://github.com/moedaaboul)

- Feel free to contact me!

## LICENSE

This work is licensed under
[MIT](https://github.com/moedaaboul/moedaaboul.github.io/blob/main/LICENSE).
