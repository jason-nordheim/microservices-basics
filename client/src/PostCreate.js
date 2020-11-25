import React, { useState } from 'react';
import Axios from 'axios'

export const PostCreate = () => {
  const [title, setTitle] = useState('')

  // create post request to `http:localhost:4000/posts 
  const handleSubmit = async event => {
    event.preventDefault() 

    const res = await Axios.post('http://localhost:4000/posts', { title} )

    if (res.status === 201) {
      setTitle('')
    } else {
      alert('Failed to create new post')
      console.error(res.data)
    }
  }

  return (
    <div className="postCreate">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" 
            value={title} 
            onChange={e => setTitle(e.currentTarget.value)} 
            />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate; 