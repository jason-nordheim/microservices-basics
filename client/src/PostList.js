import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

export const PostList = () => {
  const [posts, setPosts] = useState({}); 

  const fetchPosts = async () => {
    const res = await Axios.get('http://localhost:4000/posts')

    if(res.status === 200){
      setPosts(res.data)
    } else {
      alert('failed to retrieve posts')
      console.error(res.data)
    }
  }

  useEffect(() => {
    fetchPosts() 
  }, [])

  const renderedPosts = Object.values(posts)
    .map(post => {
      return (
        <div key={post.id} className="card">
          <div className="card-body">
            <h3>{post.title}</h3>
          </div>  
          <CommentList postId={post.id} /> 
          <hr /> 
          <CommentCreate postId={post.id} /> 
        </div>
      )
    })

  return (
    <div className="postList">
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
      </div>
    </div>
  )
}

export default PostList; 



