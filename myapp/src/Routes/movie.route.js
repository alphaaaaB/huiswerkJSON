
const express = require('express')
const router = express.Router()
const database = require('../database')

  
  //app.get("/movies/:id") zoeken op id of app.get("/movies/:moviesID",
  router.get("/movies", (req,res) => {
    res.status(200).json({results: database.movies})
  })
  
  router.get("/movies/:moviesID",(req, res) => {
  const movieID = req.params.movieID
  //toekennen aan constante variable waarbij je uit de parameters de request haalt.
  
  //Movie moet een bestaande movie zijn anders : geen film gevonden
  if(movieID >= 0 && movieID < database.movies.length){
    // res.status(200).json(result)
    //laat alle movies zien uit de database
    res.status(200).json({results: database.movies[movieID]})
  } else {
    res.status(404).send("Geen film gevonden")
  }
  
  })
  
  router.post('/movies', function (req, res) {
    //doe iets met input van het request. Verzoek bevat altijd request.
      res.send('Got a POST request')
    
      const movie = req.body
      console.log('req.body == ' + movie)
  
      database.movies.push(movie)
  
      res.status(200).json()
    })
  

// api/movies/:movieId
  router.put("/movies/:moviesID",(req, res) => {


  })

// api/movies/:movieId
  router.delete("/movies/:moviesID",(req, res) => {


  })

// api/register
  router.post("/register",(req, res) => {


  })

// api/register/:userId
  router.get("/register/:userId",(req, res) => {

    
  })
module.exports = router