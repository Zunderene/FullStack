const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const config = require('dotenv')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express();

const PORT = process.env.NODE_DOCKER_PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 4000;

app.get('/', (req, res) => res.send('Hello World desde Express'));
app.get('/get', async (req,res)  => res.send(await prisma.post.findMany()))
app.post('/set', async  (req,res) => {
    var post = JSON.parse(JSON.stringify(req.body));
    await prisma.post.create({
        data: {
            content: post.content,
            authorId : post.name
        }
    })
    console.log(post)
    res.send(200)

})

app.listen(PORT, () => console.log(`Aplicación en el puerto ${PORT}!`));