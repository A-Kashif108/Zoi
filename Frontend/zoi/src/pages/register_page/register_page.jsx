import React,{useState,useContext} from 'react'
import './register_page.css'
import AuthContext from '../../api services/context';
import Logo from  '../../assets/icons/ZOI.png'


const RegisterPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };
  return (
    <div className='registerBackground'>
        <div className="loginBox">
        <img className='logo' src={Logo} alt="" />
    <div className="loginForm">
      <form onSubmit={handleSubmit}>

      <div className="needHelp">Need help?</div>
      <div className="login_title">Sign up</div>
      <label className='email' for="email">Email</label><br></br>
      <input id='email'
      onChange={(e) => {
        setUsername(e.target.value)
      }}
       placeholder='Enter Your Email'  className='email_input' type="text" />
      <label className='password' for="password">Password</label><br></br>
      <input id='password'
      onChange={e => setPassword(e.target.value)}
       placeholder='Enter Your Password' className='password_input' type="password" />
      <label id='confPass' className='password' for="confpassword">Confirm Password</label><br></br>
      <input id='confpassword'
      onChange={e => setPassword2(e.target.value)}
       placeholder='Confirm Your Password' className='password_input' type="password" />
      <p>{password2 !== password ? "Passwords do not match" : ""}</p>
      <button id='signup' className='login_button' type="submit">
      Signup
        </button>
      </form>

    </div>
  </div></div>
  )
}

export default RegisterPage