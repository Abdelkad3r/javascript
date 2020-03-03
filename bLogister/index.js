const express = require('express') 
const app = express()

require('dotenv').config()
const bodyParser = require('body-parser')

const usersRouter = require('./routers/users.router')
const placesRouter = require('./routers/places.router')
const adminRouter = require('./routers/admin.router')

app.use(bodyParser.json())

app.use('/admin', adminRouter)
app.use('/users', usersRouter)
app.use('/users/:userId/places', placesRouter)
//app.get('/', (req, res) => res.send('Hello World!'))

// Import the axios library, to make HTTP requests
const axios = require('axios')
const path = require('path')
const moment = require('moment')

//database connection - mongodb
require('mongoose').connect('mongodb://localhost:27017/ep10')

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'e34a33921cfec06ad2ad'
const clientSecret = 'dc2fc1728b54259c068550779be2527f817fa717'


// Declare the redirect route
app.get('/admin', (req, res) => {

  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code
  
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
         accept: 'application/json'
    }
    
  }).then((response) => {
    
    const accessToken = response.data.access_token
    console.log(response.data)
    
    // redirect the user to the dashboard page, along with the access token
    res.redirect(`/admin?access_token=${accessToken}`)
  })

})

app.use(express.static(__dirname + '/public'))
app.listen(9001, () => {
    console.log("Server listening on port : 9001");
})