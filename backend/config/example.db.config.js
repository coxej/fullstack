export default {
    HOST: "localhost",
    USER: "",
    PASSWORD: "",
    DB: "mern_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };