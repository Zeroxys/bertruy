const express = require('express')
const app = new express()
const port = process.env.PORT || 5000
const host = process.env.HOST || 'localhost'

app.use(express.static('./'))

app.get('/', (req, res) => {
  res.status(200).send({ ok : 'its ok'})
})

app.listen(port, (err) => {
  if(err) return console.log(`Ha error has happened : ${err}`)
  console.log(`Server Running at Host : ${host} Port: ${port}`)
})