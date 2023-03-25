import './post.css'
import {Link} from 'react-router-dom';

function Post({post}) {
  const PF = 'http://localhost:5000/images'
  return (
    <div className='post'>
       {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="post-info">
        <div className="post-cats">
        {post.categories.map((c) => (
            <span className="postCat" key={post._id}>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}

export default Post