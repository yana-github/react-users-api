import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


const UserPage = () => {
  const {id} = useParams();

const [user, setUser] = useState(); 

useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      const user = response.data;
      setUser(user);
    })
}, [id])



  
    return (
      <>
            {user && (
                <>
                <h4>USER {user.name}</h4>
                <h4>EMAIL {user.email}</h4>
                <h4>CITY {user.address.city}</h4>
                <h4>STREET {user.address.street}</h4>
                </>
            )}
        </>
    )

};

export default UserPage;