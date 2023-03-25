import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import './singlePost.css'
import axios from 'axios'

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  console.log(path)

  const [post, setPost] = useState({});

  useEffect(()=> {
    axios.get("/posts/" + path)
    .then(res => setPost(res.data))
    .catch(err => console.log(err))
  },[path]);
  return (
    <div className="single-post"> 
    <div className="single-post-wrapper">
      {post.photo && (
        <img
        className="single-post-img"
        src={post.photo}
        alt=""
      />
      )}
      
      <h1 className="single-post-title">
        {post.title}
        <div className="single-post-edit">
          <i className="single-post-icon far fa-edit"></i>
          <i className="single-post-icon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="single-post-info">
        <span>Author:<b className="single-post-author">{post.username}</b></span>
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="single-post-desc">{post.desc}</p>
    </div>
  </div>
  )
}

export default SinglePost