const express = require('express')
const app = new express()
const port = 3000 || Process.env.port

app.get('/', (req, res) => {
  res.status(200).send({ ok : 'its ok'})
})

app.listen(port, (err) => {
  if(err) return console.log(`Ha error has happened : ${err}`)
  console.log(`Server Running at Port: ${port}`)
})