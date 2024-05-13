require('dotenv').config()

const express = require('express')
const route = require('./routes')
const app = express()
const port = process.env.PORT || 3000

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})