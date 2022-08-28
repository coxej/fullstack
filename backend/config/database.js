import dbConfig from "./db.config.js";
import { Sequelize } from "sequelize";
 
const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});
 
export default db;