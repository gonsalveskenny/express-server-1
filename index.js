const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kenny', (req, res) => {
  res.send('Hello Kenny!')
})

app.get('/jeston', (req, res) => {
  res.send('Hello Jeston!')
})

app.get('/jason', (req, res) => {
  res.send('Hello Jeston!')
})

app.get('/brothers', (req, res) => {
  res.send('Hello KenJas!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})