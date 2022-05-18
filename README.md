# Node.js Request Header Parser Microservice

This is a simple Node.js application that returns a JSON object containing the IP Address, language and software of the user.
Detailed instructions for building this project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice

### Project requirements

- A request to `/api/whoami` should return a JSON object with your IP address in the `ipaddress` key.
- A request to `/api/whoami` should return a JSON object with your preferred language in the `language` key.
- A request to `/api/whoami` should return a JSON object with your software in the `software` key.

### Useful commands

To run this repository, first install the required packages:

```
$ npm install
```

And to run the server:

```
$ node server.js
```

Alternatively, if you have **nodemon** installed globally for automatic refreshing of the server when changes are made:

```
$ nodemon server.js
```

You can install nodemon with:

```
$ npm install -g nodemon
```
