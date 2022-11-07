import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import Search from "./components/Search";
import UserPage from "./components/UserPage";


const UsersApp = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      const users = response.data;
      setUsers(users);
      console.log(users);
    });
  }, []); 

  const filterUsersByName = () => {
    if (users) {
      let copyUsers = [...users];
      if (inputValue) {
        let filterUsersByName = copyUsers.filter((user) => {
          return user.name.toLowerCase().includes(inputValue);
        });
        return filterUsersByName;
      }
    }
  };

  const filteredNameUsers = filterUsersByName();




  if (!users) {
    return <h1>ЗАГРУЗКА</h1>;
  }
  return (
    <>
      <Search onChange={(e) => setInputValue(e.target.value)} />
      <br />
      <UsersList users={filteredNameUsers ? filteredNameUsers : users} />
      <Routes>
        <Route path='users/:id' element={<UserPage />} />
      </Routes>
    </>
  );
};

export default UsersApp;
