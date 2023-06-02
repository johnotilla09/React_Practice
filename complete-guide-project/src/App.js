import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// import styles from './App.module.css';

const App = () => {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uFirstname, uLastname, uAddress, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random(), firstname: uFirstname, lastname: uLastname, address: uAddress, age: uAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );

};

export default App;
