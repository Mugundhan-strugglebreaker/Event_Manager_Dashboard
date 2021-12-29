import React, {useEffect, useState} from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import App from '../../App';


function Login({login}) {
  const [loginDetails,setLoginDetails] = useState({
      username : '',
      password : ''
  })
  const [loginStatus, setLoginStatuse] = useState([]);
  const [errors,setErrors]= useState({})
  const [loginError,setLoginError] = useState('')
  const [isSubmit,setIsSubmit] = useState(false)

  const changeEventHandler = e =>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
    setErrors({...errors,[e.target.name]:''})
  }

  const loginHandler = (e) => {
    e.preventDefault()
    setErrors(validate(loginDetails))
    setIsSubmit(!isSubmit)
  };
  useEffect(()=>{
    console.log("Outside");
    if(Object.keys(errors).length===0 && isSubmit){
        console.log("Inside")
        axios.post("http://localhost:9000/login",{
        username: loginDetails.username,
        password: loginDetails.password
        }).then((response) =>{
        setLoginStatuse(response.data)
        let status = response.data[0].loginStatus
        if(status){
            console.log(response.data)
            login(response.data)
            setLoginError('')
        }else{
            setLoginError('Invalid UserName and Password')   
        }
        }).catch(err=>{
            alert("Error in Login="+err)
        })
    }
  },[isSubmit])

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    return errors;
  };
  return (
    <div className='loginDiv'>   
          <h1 className='LoginTitle'>Event Manager</h1>
      <div className = "box">
        <div className='username'>
            <h1> Login</h1>
            <input type = "text" name = 'username' value = {loginDetails.username} placeholder= "Enter Username" onChange={changeEventHandler}/>
            <p className='errorMessage'>{errors.username}</p>
        </div>
        <div className='password'>
            <input name = "password" type = "password" name="password" value = {loginDetails.password} placeholder = "password" onChange={changeEventHandler}/>
            <p className='errorMessage'>{errors.password}</p>
            <button type = "submit" className='submitButton' onClick={loginHandler}> Login </button>
            <p className='errorMessage'>{loginError}</p>
        </div>
      </div>
    </div>
  );
}
export default Login;