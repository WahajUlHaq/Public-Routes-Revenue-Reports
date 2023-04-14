# Express Server Boilerplate By Wahaj
This is a Express server boilerplate project for getting started with Node.js and MongoDB.

# Getting Started
To get started with this project, you'll need to have Node.js and MongoDB installed on your machine.

- Clone this repository to your local machine.
- Install dependencies by running yarn install or npm install.
- Create a .env file at the root directory of the project and fill in the required variables (see below).
- Start the server by running nodemon start.
- Open http://localhost:port in your browser to see the home page. Default port is 3000.

# Environment Variables
The .env file is required and should include the following variables:

- PORT= Port number
- JWT_SECRET= String to encrypt your JWT
- CRYPT_SECRET= String to Double encrypt JWT
- MONGODB_URI= URI of Mongodb
- JWT_EXPIRES_IN= Duration of JWT to Expire

Make sure to replace the values of JWT_SECRET, CRYPT_SECRET, and MONGODB_URI with your own secrets and database URI and JWT_EXPIRES_IN. Note that these values are mandatory to run server successfully.

# License
This project is developed by Wahaj Ul Haq. 
