const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.status(200).json('Olá bem vindo');
})

// Export the Express API
module.exports = app