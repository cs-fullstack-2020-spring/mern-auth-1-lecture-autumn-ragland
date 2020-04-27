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

### Server Side
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


JSON Web Tokens - https://jwt.io/
Passport - http://www.passportjs.org/packages/passport-jwt/
