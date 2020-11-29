import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';
import Home from '../src/components/Home/Home'
import axios from 'axios';
import firebase from 'firebase';
import fire from './firebase'
import config from './firebase';
import UserInput from './components/UserInput'




const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [newUserEmail, setNewUserEmail] = React.useState();
  const [newUserPassword, setNewUserPassword] = React.useState();


  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('users').get();
      setUser(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

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
    fire
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
      const db = firebase.firestore();
      db.collection('user').doc().set({id: user.id , email: user.email, password: user.password})
  };

  const handleSignup = () => {
    clearErrors();
    fire
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
    fire.auth().signOut();
  };

  const authListener = () => {
  fire.auth().onAuthStateChanged(user => {
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


