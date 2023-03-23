import { Link } from "react-router-dom"

function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <nav className='navigation'>
            <ul className="list">
                <li className='list-item'><Link to="/" className="link">HOME</Link></li>
                <li className='list-item'><Link to="/about" className="link">ABOUT</Link></li>
                <li className='list-item'><Link to="/contact" className="link">CONTACT</Link></li>
                <li className='list-item'><Link to="/write" className="link">WRITE</Link></li>
                <li className='list-item'><Link to="/logout" className="link">LOGOUT</Link></li>
            </ul>
        </nav>

        <div className="top-right">
          {user ? (
            <Link className="link" to="/settings">
            <img
              className="top-img"
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt=""
            />
          </Link>
          )
          :
          (<ul className="list">
            <li className="list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            
          </ul>
          )
        }
          <i className="top-icon fa-solid fa-magnifying-glass"></i>
          
        </div>
        
    </div>
  )
}

export default TopBar