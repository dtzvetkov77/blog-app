import './register.css'

function Register() {
  return (
    <div className="register">
    <span className="register-title">Register</span>
    <form className="register-form">
      <label>Username</label>
      <input className="register-input" type="text" placeholder="Enter your username..." />
      <label>Email</label>
      <input className="register-input" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="register-input" type="password" placeholder="Enter your password..." />
      <button className="register-button">Register</button>
    </form>
      <button className="register-login-button">Login</button>
  </div>
  )
}

export default Register