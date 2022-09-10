import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    if (firstName && email) {
      // console.log('submit the form');

      // In ES6 if key name matches the value of the value, we can skip defining both and can set only one of them:
      // instead:   const person = {firstName: firstName, email:email};  we ken use just:
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person]; //this puts person to people.
      });

      setFirstName('');
      setEmail('');

      console.log(person);
    } else {
      console.log('empty values');
    }

  }

  return (<>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input type="text"
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <button type='submit' onClick={handleSubmit}>add person</button> */}
        <button type='submit'>add person</button>
      </form>

      {
        people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })
      }
    </article>
  </>);
};

export default ControlledInputs;
