const mysql = require('mysql2')
require('dotenv').config()

const  db = mysql.createPool({
    host: process.env.NODE_ENV_HOST,               // the host name MYSQL_DATABASE: node_mysql
    user: process.env.NODE_ENV_USER,             // database user MYSQL_USER: MYSQL_USER
    password: process.env.NODE_ENV_PASS,     // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: process.env.NODE_ENV_DB               // database name MYSQL_HOST_IP: mysql_db
  })

  
module.exports.db = db

//https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/