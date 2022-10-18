const mysql = require('mysq12')

const db = mysql.createPool({
    host: 'mysql_db',               // the host name MYSQL_DATABASE: node_mysql
    user: 'MYSQL_USER',             // database user MYSQL_USER: MYSQL_USER
    password: 'MYSQL_PASSWORD',     // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: 'books'               // database name MYSQL_HOST_IP: mysql_db
  })



#https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/