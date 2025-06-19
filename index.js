require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/name', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env , () => {
  console.log(`Example app listening on port ${port}`)
})