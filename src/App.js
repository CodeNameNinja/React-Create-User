import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
const App = () => {
  const [usersList, setUsersList] = useState([{ name: "Mitchell", age: 21 }]);
  const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList)=>{
          return [...prevUsersList, { name: uName, age: uAge}]
      })
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;