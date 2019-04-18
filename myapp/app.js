const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())

const port = 3000

app.get('/',(req, res) => {
  const result = {
    name : "poepstront",
    year : 2000,
    description : "poep met stront",
    acteurs : [{
      name : "Tom Cruise"
    },{
      name : "stronthoofd Cruise"
    }]
  }
  res.status(200).json(result)
})

app.post('/movies', function (req, res) {
  //doe iets met input van het request. Verzoek bevat altijd request.
    res.send('Got a POST request')
  
    const movie = req.body
    console.log('req.body == ' + movie)
    res.status(200).json()
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