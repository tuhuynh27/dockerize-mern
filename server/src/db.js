const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://username:password@database:3306/example_dbname"
);

module.exports = sequelize;
