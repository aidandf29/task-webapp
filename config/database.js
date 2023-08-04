import { Sequelize } from "sequelize";

const db = new Sequelize("hpam", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
