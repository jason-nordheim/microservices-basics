// Comments Service 
const PORT = 4001; 
const express = require('express'); 
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express() 
app.use(bodyParser.json())
app.use(cors())

/* Storage for posts */
const commentsByPostId = {}; 

/**
 * GET => `/posts` 
 */
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []) 
})

/**
 * POST => `/posts/:id/comments` 
 */
app.post('/posts/:id/comments', (req, res) => { 
  const commendId = randomBytes(4).toString('hex')
  const { content } = req.body 

  // see if we already have any comments for the associated post 
  const comments = commentsByPostId[req.params.id]  || []   
  // add new comment 
  comments.push({ id: commendId, content })

  // save the new/mutated array 
  commentsByPostId[req.params.id] = comments 

  // return the new comment 
  res.status(201).send(commentsByPostId[req.params.id])
}) 

/**
 * Start Express app 
 */
app.listen(PORT, () => console.log(`posts service listening on ${PORT}`))
