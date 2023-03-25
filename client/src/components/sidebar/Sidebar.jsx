import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios"
import {Link} from 'react-router-dom'

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    axios.get('/categories')
    .then(res => setCats(res.data))
    .catch(err => console.log(err))
  })
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        </div>

        <div className="sidebar-item">
        <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebar-list">
            {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" key={c.name}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
            </ul>
        </div>

        <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
          <i className="sidebar-icon fab fa-pinterest-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar