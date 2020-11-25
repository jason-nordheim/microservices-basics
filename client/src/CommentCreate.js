import React, { useState } from 'react';
import Axios from 'axios'

export const CommentCreate = ({ postId}) => {
  const [content, setContent] = useState('') // state 

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const res = Axios.post(`http://localhost:4001/posts/${postId}/comments`, { content })

    if ((await res).status === 201) {
      setContent('')
    } else {
      alert('Unable to create comment')
      console.error(res.data)
    }
  }

  return (
    <div className="container commentCreate">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Create comment</label>
          <input className="form-control"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value) }
            /> 
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate; 