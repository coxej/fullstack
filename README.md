# fullstack
React/Express/MySQL Full Stack Demo

# /backend
Backend with Node.js Express & MySQL

npm init -y

npm install express mysql2 sequelize cors

npm install --save-dev nodemon

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo "Error: no test specified" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mysql2": "^2.3.0",
    "sequelize": "^6.6.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}

CREATE DATABASE mern_db;
CREATE TABLE products(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    price DOUBLE,
    createdAt DATE,
    updatedAt DATE
)ENGINE=INNODB;


./node_modules/nodemon/bin/nodemon.js index

# /frontend
Frontend with React.js & Bulma

npx create-react-app frontend

npm install react-router-dom axios bulma

npm start