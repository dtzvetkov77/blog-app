import "./sidebar.css"

function Sidebar() {
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
            <ul className="sidebar-list">
                <li className="sidebar-list-item">Life</li>
                <li className="sidebar-list-item">Music</li>
                <li className="sidebar-list-item">Style</li>
                <li className="sidebar-list-item">Sport</li>
                <li className="sidebar-list-item">Tech</li>
                <li className="sidebar-list-item">Cinema</li>
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