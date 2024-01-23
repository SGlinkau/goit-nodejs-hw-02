# Goit-nodejs-rest-api

## About

REST API application to work with a collection of contacts.

## Tech stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Used

([Postman](https://www.postman.com/)) to work with REST API <br>
([Joi](https://joi.dev/)) package for validation <br>
([MongoDB](https://www.mongodb.com/atlas/database)) clouds database service <br>
([Mongoose](https://mongoosejs.com/)) created database model to application data

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.

## Usage

After you clone this repo to your desktop, go to its root directory and run `npm install` to install
its dependencies.

Once the dependencies are installed, you can run `npm run start:dev`

Open your browser or postman and check all available methods and endpoint's

- GET (contacts) : `http://localhost:3000/api/contacts`
- GET (find contact by id) : `http://localhost:3000/api/contacts/CONTACT_ID*`
- POST (add new contact with json) : `http://localhost:3000/api/contacts/`
- PUT (update contact with json) : `http://localhost:3000/api/contacts/CONTACT_ID*`
- DELETE (remove contact with unique id) : `http://localhost:3000/api/contacts/CONTACT_ID*`

\* - replace CONTACT_ID with ID of contact that you want to work with (you can check them with GET method)
