import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from '../../api services/context';
import Logo from  '../../assets/icons/ZOI.png'
import './Login_Page.css'


const LoginPage = () => {
  let navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    email.length > 0 && loginUser(email, password);
  };

  return (
    <div className='login_background'>
      <div className="loginBox">
        <img className='logo' src={Logo} alt="" />
        <div className="loginForm">
          <form className="loginForm" onSubmit={handleSubmit}>
          <div className="needHelp">Need help?</div>
          <div className="login_title">Log in</div>
          <label id='em' className='email' htmlFor="email">Email</label><br></br>
          <input id='email' placeholder='Enter Your Email'  className='email_input' type="text" />
          <label id='psd' className='password' htmlFor="password">Password</label><br></br>
          <input id='password' placeholder='Enter Your Password' className='password_input' type="password" />
          <button id='loginBtn' className='login_button' type="submit" value="Login">Login</button>
          <div className='create_account' onClick={()=>{navigate("/register")}} >Create New Account</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage