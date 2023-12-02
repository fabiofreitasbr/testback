const express = require('express')
const app = express()
const PORT = 3000


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})




// Export the Express API
module.exports = app