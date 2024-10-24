const { Clients } = require("../models/clients.model");

const create = async (name, email, phone, comments = "without comment") => {
  return await Clients.create({ name, email, phone, comments });
};

const clientsServices = {
  create,
};

module.exports = {
  clientsServices,
};
