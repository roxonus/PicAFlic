import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';
import Home from '../src/components/Home/Home'
import axios from 'axios';
import firebase from 'firebase';
// import Firebase from './firebase'
// import config from './firebase';
import UserInput from './components/UserInput'
// require('firebase/auth')




const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      })
  };

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        } 
      })
        
  };
  function writeUserData(userId, email, password) { 
    console.log(email, "Here") 
    firebase.database().ref('users/' + userId).set({
          email: email,
          password: password, 
        });
        }

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
     } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);


  return (
    <div className='App'>
      {user ? (
        <Home handleLogout={handleLogout} />
       
      ) : (
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
      )}
    </div>
  );
};

export default App;


