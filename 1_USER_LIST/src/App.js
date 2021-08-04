import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, SetUserList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    SetUserList((prevUserList) => {
      return [...prevUserList, {name:uName, age:uAge, id:Math.random().toString()}];
    })
  }
  console.log(userList);
  return (
    <div>
      
      <AddUser onAddUser={ addUserHandler}/>
      <UserList users={userList} />
    </div>
  );
}

export default App;
