import { useState } from 'react';
import {AddUser} from './components/Users/AddUser'
import { UsersList } from './components/Users/UsersList'

function App() {

  const [usersList, setUsersList] = useState([]);

  function addUserHandler(name, age){
    setUsersList( newUserList => {
      return [...newUserList, {key: Math.random().toString(),name: name, age: age}]
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
