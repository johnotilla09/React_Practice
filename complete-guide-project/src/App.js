import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// import styles from './App.module.css';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
