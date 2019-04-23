const express = require('express')
var bodyParser = require('body-parser')

const movieRoutes = require('./src/Routes/movie.route')

const app = express()
const port = 3000
app.use(bodyParser.json())

app.all("*", (req, res, next) => {
  console.log("Generic handler")
  next()
})

app.use("/api", movieRoutes)

  app.all("*", (req, res, next) => {
    console.log('Endpoint bestaat niet')
    const errorObject = {
      message : "Endpoint not found",
      code : 404
    }
    next(errorObject)
  })
  //Handle 404 errors
  app.use((error, req, res, next) => {
    console.log("Error handler aangeroepen", error.message)
    res.status(500).json(error)
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })




  //Voorbeeld error handler
  //You define error-handling middleware in the same way as other middleware, 
  //except with four arguments instead of three; specifically with the signature (err, req, res, next):
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

