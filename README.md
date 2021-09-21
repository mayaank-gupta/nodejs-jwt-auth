# Securing Node.js RESTful APIs with JWT (Express, MongoDB, JWT)

> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
> The general concept behind a token-based authentication system is simple.
> Allow users to use their username and password in order to obtain a token which allows them to access a specific resource without using every time their natural credentials.
> Once their token has been obtained, the user can use that token to access a specific resource in a server for a time period to the remote site. 

## Features
- Secure API calls
- Improved security

## Tech

This project uses a number of open source projects to work properly:

- [ExpressJS](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [Mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.

## Environment Variables (.env)
```
DB_NAME=
DB_HOST=
DB_PORT=
PORT=
JWT_SECRET=
```

## Installation
Clone this project.

Install the dependencies and start the server.

```sh
cd nodejs-jwt-auth
npm install
node app.js
```

Happy Coding!