import React, { useState, useEffect } from 'react';



///////////////////////  IMPORTANT //////////////////////
// 11:25https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22271780#questions/16545804


const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // we can use setUsers(users) here, but use State 01.preserve value 02. re-render, so 
    //if we use setUsers here- we wil initiate infinite loop!!!!!!!
    // solution: set second argument in useEffect to [] , so to trigger it only ones
    setUsers(users);
    //console.log(users);
  };

  useEffect(() => {
    //we can not use useEffect as async-await, because it will return promise, and useEffect can not be promise because clean up function
    //we can put promise inside or outside useEffect (in this case is outside)

    getUsers();

  }, []);

  return (<>
    <h3>github users</h3>
    <ul className='users'>
      {users.map((user) => {
        const { id, login, avatar_url, html_url }=user;
        return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </div>
        </li>
        )
      })}
    </ul>
  </>
  );
};

export default UseEffectFetchData;
