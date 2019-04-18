const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

  //Handle 404 errors
  app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })



  //Voorbeeld error handler
  //You define error-handling middleware in the same way as other middleware, 
  //except with four arguments instead of three; specifically with the signature (err, req, res, next):
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))