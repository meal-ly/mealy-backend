<p align="center">
 <img src="https://mealy-fjc.firebaseapp.com/assets/logo_small.png" alt="mealy-logo">
</p>

<h1 align="center">Mealy Backend App</h1>


- [Project Details](#project-details)
- [Technical Details](#technical-details)
  - [Dependencies](#dependencies)
  - [Local Development](#local-development)
    - [Prerequisites](#prerequisites)
    - [Installation / Setup](#installation-/-/setup)
    - [Running / Development](#running-/-/development)
  - [Deploy](#deploy)

## Project Details
Mealy is an app that provides incredible recipes for every occasion. Users can log in and found thousands of recipes for breakfast, lunch, snacks etc.

Watch the application alive at: https://mealy-fjc.web.app/

Just hit login and then login with dummy data and you're in :)

This repo, contains the backend application. If you wan to see our frontend application, please refer to: https://github.com/meal-ly/mealy-frontend. There you will finde more info about the project like designs, project management and some more fun stuff :)

## Technical Details
### Dependencies
See `package.json` for the complete list. Below are is a list of primary libraries used to support this application

* Express
* MongoDB
* Hapi: Joi & Boom

### Local development

Follow this instructions to run this project on your local machine.

#### Prerequisites
To run this project all you need to have installed is node.js. It was created using this version:

```sh
$ node --version
v12.8.1
```

##### Installation / Setup
```sh
git clone https://github.com/meal-ly/mealy-backend.git # Clone the repository.

cd mealy-backend # Navigate into the folder

npm install # Install dependendices
```

##### Running / Development
```sh
npm run dev # Start the local development server
```

Then open **http://localhost:3001**

### Deploy
```sh
now  # Deploy dist folder to prod server
```

