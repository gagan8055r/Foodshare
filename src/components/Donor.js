import React, { useState } from 'react';
import './Donor.css';
import app from './FireBaseD';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Donor = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created your account");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  }
const signIn=()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      console.log(user);
      alert("You have successfully signed in ")
        navigate('/donor/details');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
   alert(errorCode)
  });

}
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://foodconnect-a8083-default-rtdb.firebaseio.com/userDataRecord/donorRecord.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.ok) {
      setEmail('');
      setPassword('');
   
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h2 style={{ color: 'rebeccapurple' }}>DONOR'S LOGIN</h2>
          <label htmlFor="username">Email:</label>
          <input
            name='email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            name='password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
          />
        </div>
        <button type="button" onClick={signup}>Create Account</button>
        <button type="submit" onClick={signIn}>Log In</button>
      </form>
    </div>
  );
};

export default Donor;
