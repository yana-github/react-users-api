import { Link } from "react-router-dom";
/* import React, { useEffect, useState } from "react";
import axios from "axios"; */
import UserItem from "./UserItem";

const UsersList = (props) => {

  const { users } = props;
  

  const allUsers = users.map(
    (user) => <UserItem key={user.id} {...user} />); 

/*   const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const users = response.data;
      setUsers(users);
    });
  }, []); */


 


  return (
    <>
      {allUsers &&
      users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <h2>{user.name}</h2>
        </Link>
         ))
      }
  
    </>
  );
};

export default UsersList; 