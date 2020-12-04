import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';
import Home from '../src/components/Home/Home'
import firebase from './firebase';
import Nav from "../src/components/Navbar/Nav"
import 'materialize-css/dist/css/materialize.min.css';



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
    const db = firebase.firestore();
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        return db.collection('user').ref(cred.user.uid)
      }) 

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


  function writeUserData({uid, email, password}) { 
    setUser = () => {
    const db = firebase.firestore();
    db.collection('users').add({ uid, email, password })
    console.log(db)
    }
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
      <Nav />
      {user ? (
        <Home handleLogout={handleLogout} />
       
      ) : (
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} writeUserData={writeUserData} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
      )}
    </div>
  );
};

export default App;


