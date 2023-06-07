
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();
  const [userData, setUserdata] = useState({
    email:"",
    password:"",
  });
 
  let name,value;
  const postChange=(e)=>{
name=e.target.name;
value=e.target.value;

setUserdata({...userData,[name]:value})

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {email,password}=userData;
    const res=await fetch('https://foodconnect-a8083-default-rtdb.firebaseio.com/userDataRecord/agentRecord.json',
      {  method:'POST',
      headers:{
      'Content-Type':'application/json',
  },
  body:JSON.stringify({
    email,
    password,
  }),
    }
    );
 if(res)
 {
  setUserdata({
    email:"",
    password:""
  })
   navigate('/donor/agentdetails');


 }
 else
 {
  alert("Please fill the data")
 }
  };

  return (
    <div className="login-form-container">
    
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h2 style={{color:'rebeccapurple'}}>AGENT'S LOGIN</h2>
          <label htmlFor="username">Email:</label>
          <input
          name='email'
            type="email"
            id="email"
            value={userData.email}
            onChange={postChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
          name='password'
            type="password"
            id="password"
            value={userData.password}
            onChange={postChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
