# Shippify Challenge - Vehicle's Platform API (Back-End)

### Overview
- That project is the Vehicle's Platform API, proposed as a Technical Test from Shippify company.

- It was developed using [Express](https://expressjs.com/) along [Sequelize for ORM](https://sequelize.org/). (**Some** decisions will be explained more below).

- The API haves **endpoints** (Basically all the basic ones like **SHOW:ID**; **PATCH:ID**; **POST**; **GET**; **GET:ID**; for main models) for the follow features:
  - List all vehicles along its drivers / The same with a given **filter**
  - Create a new vehicles
  - Update an existing vehicle
  - Delete a vehicle
  - List all Drivers
  - Show Driver by ID

### Setup (Dockerized)
- The Back-End is Dockerized for development, so, to setup the project, you I'll need to have installed Docker and Docker-Compose. (You can also setup it locally running `npm install` to install the dependencies, and then `node index.js` to run the server).

- The folder has a file called **.env.example** copy and paste it as **.env**, and fill this env file with the Database Credentials and the application port (Optional).

- With the enviornment file created, build the application, setting up the container.

```
docker-compose up
```

- Application will be available in http://localhost:8080.

### Tests/Lint
- This topic will be commented in **"Things I could love to do"**

### Deploy
- The application was deployed on Heroku, and it is currently in production at https://shippify-nicolas-challenge.herokuapp.com/

### Things I could love to do
- Because of the deadline, I couldn't create **Unit tests**, cause the "core" features of the project custed me the entire deadline. But its something essential for me, and one of the **extra things** that I initially planned to develop, and provide test coverage for all cases and the entire code. (The same applies for Front-End Project)

- Because of the same reason, I also couldn't create a **CI - Continuous Integration**, and also configure a **linter** with **eslint** (That also would be inside the CI). But its also something essential for me, and one of the **extra things** that I initially planned to develop.

- These things above are the most essentialy, that I wanted to document here. But also have some other minor "things" that would bee nice to do too.
