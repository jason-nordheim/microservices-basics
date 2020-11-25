import React, { useState, useEffect } from 'react' 
import Axios from 'axios'

export const CommentList = ({ postId}) => {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const res = await Axios.get(`http://localhost:4001/posts/${postId}/comments`)
    
    if (res.status === 200) {
      setComments(res.data)
    } else {
      alert(`Unable to retrieve comments for ${ postId}`)
      console.error(res.data)
    }
  }

  useEffect(() => {
    fetchComments() 
  }, [])


  const renderedComments = comments.map(comment => {
    return (
    <li key={comment.id}>{ comment.content }</li>
    )
  })

  return (
    <div className="commentList">
      <ul>
        { renderedComments}
      </ul>
    </div>
  )
}

export default CommentList