const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Clients = sequelize.define(
  "Clients",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "clients",
  }
);

module.exports = {
  Clients,
};
