import React, { useState } from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid';
import AddUserForm from "./components/AddUserForm";

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users, setUsers] = useState(usersData)

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar Usuarios
  const deleteUser= (id) =>{
    //Filtramos todos los usuarios menos el que queremos eliminar
    const arrayFiltrado = users.filter(user => user.id!= id); 
    //Nos quedamos con todos los usuarios excepto el que queremos eliminar
    setUsers(arrayFiltrado)
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
