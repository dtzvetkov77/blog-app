function TopBar() {
  return (
    <div className='top'>
        <nav className='navigation'>
            <ul className="list">
                <li className='list-item'>HOME</li>
                <li className='list-item'>ABOUT</li>
                <li className='list-item'>CONTACT</li>
                <li className='list-item'>WRITE</li>
                <li className='list-item'>LOGOUT</li>
            </ul>
        </nav>

        <div className="top-right">
          <img className='top-img' src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" />
          <i className="top-icon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default TopBar