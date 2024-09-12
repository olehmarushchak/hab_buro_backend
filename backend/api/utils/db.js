"use strict";
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const { Sequelize } = require("sequelize");

const { POSTGRES_URL } = process.env;

console.log(POSTGRES_URL);

const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: "postgres",
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true, // Ensures SSL connection for security
      rejectUnauthorized: false, // Allows self-signed certificates (if needed)
    },
  },
});

module.exports = {
  sequelize,
};
