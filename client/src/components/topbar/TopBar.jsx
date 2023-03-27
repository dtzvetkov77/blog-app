import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='top'>
        <nav className='navigation'>
            <ul className="list">
                <li className='list-item'><Link to="/" className="link">HOME</Link></li>
                {user && <li className='list-item'><Link to="/write" className="link">WRITE</Link></li>}
                <li className="list-item" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
            </ul>
        </nav>

        <div className="top-right">
          {user ? (
            <Link className="link" to="/settings">
            <img
              className="top-img"
              src={PF + user.profilePic}
              alt="profile-picture"
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

          
        </div>
        
    </div>
  )
}

export default TopBar