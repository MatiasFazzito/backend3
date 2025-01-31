# Matias Fazzito´s Adoptme API

_This is a project based on Backend III course from CODERHOUSE in continuation with previous courses and my profesional learning path to insert myself in the developing world, in this case with the lead of Prof. Federico Osandon @FedericoOsandon and tutors Rodrigo Kameyha, David Alvarez & Santino Ursino, the main objective is to test and document an existing CODERHOUSE project called adoptme_

## Getting started 🚀

_These instructions will allow you to get a copy of the working project in your local machine for development and testing_


### Pre-requisites 📋

_You only need Visual Studio Code and MongoAtlas to test all functions_

### Installing 🔧

_Opening your VSC terminal type the following_

```
$ git clone https://github.com/MatiasFazzito/Backend3
```

```
$ cd ../path/to/the/file
```

```
$ npm install
```

```
$ npm start
```

_In the .env.example file you will find all the global variables you need to run the project_

## running tests ⚙️

_Every funcionality can be tested with the CLI in a duplicated VSC terminal_

### Browser ⌨️

_In order to perform tests you first need to use the next command on your VSC terminal_

```
npm start
```

_A localhost server will be open on the port you indicated on the global variables_

_Aditionally you need to duplicate the terminal and run this command_

```
npm test
```

_This command will run all test on the file indicated on packaje.json archive and will indicate if they pass or fail_

## Built with 🛠️

### Dependencies 🛠️

* [express](https://expressjs.com/es/) - Used framework
* [mongoose](https://mongoosejs.com/) - Used for persistence
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Used for authorization and authentication
* [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Used to generate and manage cookies
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Used to encrypt user password
* [multer](https://www.npmjs.com/package/multer) - Used to manage image upload
* [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - Used for documentation
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - Used for documentation
* [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) - Used to create mocks of users and pets
* [chai](https://www.npmjs.com/package/chai) - Used to perform testing
* [mocha](https://www.npmjs.com/package/mocha) - Used to perform testing
* [supertest](https://www.npmjs.com/package/supertest) - Used to perform testing

### Docker image 🛠️

_To run a docker image go to this link_

*[matiasfazzito/adoptme:latest](https://hub.docker.com/r/matiasfazzito/adoptme)

## Contributing 🖇️

Currently this project is not open to colaboration but sugestions are always welcome

## Versions 📌

Git was used for project version control, you can find all versions on github version history

## Authors ✒️

* **MauricioEF** - *Initial work* - [MauricioEF](https://github.com/CoderContenidos/RecursosBackend-Adoptme)
* **Fazzito Matias** - *Documenting and testing* - [MatiasFazzito](https://github.com/MatiasFazzito)


## Greetings 🎁

* Tell others about this project 📢
* Share a beer 🍺 or a coffee ☕ with the team😁