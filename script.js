const express = require('express');
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.post("/", (req, res) => {
    let height = Number(req.body.h8);
    let weight = Number(req.body.w8);
    let result = weight / Math.pow(height, 2);
    res.send(`${result} is your calculated BMI`);
})
app.listen(port, () => console.log(`Running on Port: ${port}`))