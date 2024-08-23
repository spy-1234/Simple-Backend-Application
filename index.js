require('dotenv').config()
const express = require('express')
const app = express()

//const port = 3000 ---> for production

app.get('/', (req, res) => {
  res.send('I love you... my Love')
})

app.get('/twitter', (req, res) => {
    res.send('@Janmeja18520005')
})

app.get('/login', (req, res) => {
    res.send('<h1>Click here to <button>login</button></h1>');
});

app.get('/linkedin', (req,res) => {
    res.send('<h2>https://www.linkedin.com/in/janmejaisingh</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})