import './style.css'
import Loginheader from './Loginheader';
const baseURL = "https://localhost:7079/login check";

function LoginForm() {
      function LoginPost(){
        const axios = require('axios').default;
        var md5 = require('md5');
        var pass = document.getElementById("password").value
        axios.post('https://localhost:7079/loginCheck', {
            "userName":document.getElementById("email").value,
            "password":md5(pass)
          })
          .then(function (response) {
            window.location.href= "http://localhost:3000/dashboard";
          })
          .catch(function (error) {
            alert("Incorect Username and Password");
          });
    }
      function LoginFun(){
        if(document.getElementById("email").value!=null && document.getElementById("password").value!=null){
            LoginPost()
        }
        else{
            alert("Username and Password does not matched!");
        }
    }

    return(
      <div>
          <Loginheader/>

          <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div className="footer">
              <a className='btn btn-outline-secondary btn-sm mr-3' href="/">Cancel</a>&nbsp;&nbsp;&nbsp;
              <a  type="submit" onClick={LoginFun}  className="btn btn-outline-success btn-sm ml-5">Login</a>
          </div> 
      </div>
      </div>   
    )       
}

export default LoginForm;