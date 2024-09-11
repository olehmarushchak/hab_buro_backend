const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");
const { Clients } = require("./clients.model");
// const { Projects } = require("./projects.model");
const { Recruits } = require("./recruits.model");
const { Projects } = require("./projects.model");

const initTables = async () => {
  // await Clients.sync({ force: true });
  // await Recruits.sync({ force: true });
  // await Projects.sync({force: true});
  // await Projects.sync({force: true});
  // addColumn()
  //   .then(() => {
  //     console.log("Column added successfully.");
  //   })
  //   .catch((error) => {
  //     console.error("Error adding column:", error);
  //   });
};

const allModels = {
  initTables,
};

module.exports = {
  allModels,
};
