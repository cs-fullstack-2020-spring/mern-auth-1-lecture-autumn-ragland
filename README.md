# 20200427-auth1
Authentication Introduction

### Set Up
- Create React App called `client`
- Create directory called `server`
    - create entry point file
    - run `npm init` to generate package.json file
    - install `mongoose` `nodemon` and `express` (we will install more node modules later)
- In the server entry point file, define a server listening on a port and connect to mongo database
- Create config folder with `keys` JS file, export mongo connection string (database string) and require in larger connection piece in entry point file

### Server
- Install modules for authentication `npm install bcryptjs jsonwebtoken passport passport-jwt is-empty validator`
- Create `UserSchema` to hold users in database
    - Properties `username` `password` `email` and `date`
    - `username` `password` and  `email` properties should be required and type string ex. `username : {required : true, type : String}`
    - `date` property should be type date and default to now
- Create a `routes` directory and a `users` JS file
- In the `users` file create a test route and export router
- Mount all routes from `users` file to path `users`
- In the `users` routes module get a reference to `jsonwebtoken` `bcrypt` and the secret key defined in the `keys` file in the config directory 
- Create a `registration` route : this route will create new users if the user email does not already exists
    - call the `findOne()` method on the user collection filtering by email
    - then if a user is found send the message `a user already exists with this email`
    - if a user is not found create a `newUser` object from the UserCollection model with properties `name`, `email` and `password` pulled from the request body
    - salt and has the `newUser` password using `bcrypt`
    - save the new user
- Create a login route : this route will validate an attempted login and produce a token
    - call the `findOne()` method on the user collection filtering by email
    - then if a user is not found send the message `User with email [EMAIL] not found`
    - if a user is found check the hashed password from the database against the password passed into the request body
    - then if the passwords match define a payload object and pass it into the `jwt` `sign()` method along with the secret key defined in your keys file in your config folder, set the `expiresIn` property to 30 seconds, and a callback function with errors and token
    - in the `sign()` callback function, if there are errors send errors and if there is a token send the token
    - if the passwords do not match send the message `User with email ${email} incorrect password`

### Client


[JSON Web Tokens Documentation](https://jwt.io/) | [Passport Documentation](http://www.passportjs.org/packages/passport-jwt/) | [Tutorial](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
