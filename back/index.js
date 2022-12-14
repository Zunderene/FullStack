const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const  {db} = require("./db/mysql")
require('dotenv').config()

const app = express();
console.log(process.env); 

const PORT = process.env.NODE_DOCKER_PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.send('Hello World desde Express'));
app.get('/get', async (req,res)  => {
    const SelectQuery = " SELECT * FROM post";
        db.query(SelectQuery, (err, result) => {
        console.log(result)
        res.send(result)
    })
})
app.post('/set', async  (req,res) => {
    const user = req.body.name;
    const pots = req.body.pots;
    console.log(user + ' ' + pots)
    const InsertPots = "INSERT INTO post (name,post) values (?,?)"
    db.query(InsertPots, [user, pots], (err, result) => {
        console.log(err)
    })
    res.send(200)

})

app.listen(PORT, () => console.log(`Aplicación en el puerto ${PORT}!`));