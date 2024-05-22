const express = require('express')
const app = express()
const port = 2011

app.get('/trangchu', (req, res) => res.send('Hello World! Nice to meet u'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})