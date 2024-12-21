
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        
        setListOfUser(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        
        setError('Erreur lors du chargement des utilisateurs');
        setLoading(false); 
      });
  }, []); 

  
  if (loading) return <div>Chargement...</div>;


  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
