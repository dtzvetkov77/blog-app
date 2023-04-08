import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">Cool</span>
        <span className="header-title-lg">BLOG</span>
      </div>
      <img
        className="header-img"
        src="https://static.vecteezy.com/system/resources/previews/001/987/871/original/abstract-black-stripes-diagonal-background-free-vector.jpg"
        alt=""
      />
    </div>
  )
}

export default Header