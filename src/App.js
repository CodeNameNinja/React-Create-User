import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
const App = () => {
  const users = [{ name: "Mitchell", age: 21 }];
  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
};

export default App;
