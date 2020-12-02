import React from 'react';
import firebase from '../firebase'

export const UserInput = ({ user }) => {
  const [email, setEmail] = React.useState(user.email);
  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('user').doc(user.id).set({...user, email})
  }
  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('user').doc(user.id).delete()
  }
  
};

export default UserInput;