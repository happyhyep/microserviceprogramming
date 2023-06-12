const express = require('express')
const {createProxyMiddleware } = require('http-proxy-middleware')
var cors = require('cors');
const app = express()
const port = 8000
app.use(cors())
app.get('', (req, res) => {
  res.send({name: 'Jeong Hye In', studentId: '2021105641', num: 'assignment2'})
})

app.get('/api', (req, res) => {
  res.send({name: 'Jeong Hye In', studentId: '2021105641', num: 'assignment2'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})