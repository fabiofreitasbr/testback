const express = require('express')
const app = express()
const PORT = 5000;


app.get('/', (req, res) => {
  res.status(200).json('Olá bem vindo');
})


app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

// Export the Express API
module.exports = app