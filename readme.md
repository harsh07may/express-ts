# Express + TS Template
<b>⚠ WORK IN PROGRESS </b>

The project contains an `Express+TS` project with several dependencies including `bcryptjs`, `dotenv`, `jsonwebtoken`, `mongoose`, and `ts-node-dev`. This folder is responsible for the backend of the application.

Before running the server, make sure to set up your environment variables. Create a `.env` file in the `server` folder and define the necessary variables such as database connection URI, JWT secret, etc.

The `.env` should contain:

```bash
PORT =
TOKEN_SECRET =
DATABASE_URL =
```
To install the required dependencies, run:

```bash
npm install
```
To run the server in development mode with ts-node-dev automatic restart on changes, use the following command:

```bash
npm run dev
```
To build the server for production, use the following command:

```bash
npm run build
```

Folder Structure:
```bash
├───src
│   ├───controllers
│   ├───middleware
│   ├───models
│   ├───routes
│   ├───services
│   ├───types
│   └───utils
└───views
└───.env
```
