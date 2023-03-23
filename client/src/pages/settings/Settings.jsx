import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

function Settings() {
  return (
    <div className='settings'>
        <div className="settings-wrapper">
    <div className="settings-title">
        <span className="settings-update-title">Update Your Account</span>
        <span className="settings-delete-title">Delete Account</span>
    </div>
    <form className="settings-form">
    <label>Profile Picture</label>
     <div className="settings-pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settings-pp-icon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settings-pp-input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Daniel" name="name" />
          <label>Email</label>
          <input type="email" placeholder="daniel@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settings-submit-button" type="submit">
            Update
          </button>
        </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings