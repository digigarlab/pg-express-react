const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/foo', async (req, res) => {
  res.send({ foo: "bar" })
})

module.exports = app
