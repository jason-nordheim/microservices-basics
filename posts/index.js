// POSTS Service 
const PORT = 4000; 
const express = require('express'); 
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express() 
app.use(bodyParser.json())
app.use(cors())

/* Storage for posts */
const posts = {}; 

/**
 * GET => `/posts` 
 * returns all the posts 
 */
app.get('/posts', (req, res) => {
  res.send(posts) 
})

/**
 * POST => `/posts` 
 * creates a new post 
 * 1. generate id 
 * 2. create posts object with id and string provided in request body. 
 * 3. save object 
 */
app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex'); 
  const { title } = req.body; 

  // save post 
  posts[id] = { id, title }

  // return saved posts
  res.status(201).send(posts[id])
})

/**
 * Start Express app 
 */
app.listen(PORT, () => console.log(`posts service listening on ${PORT}`))