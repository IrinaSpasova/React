import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
// important = PersonContext is function, but PersonContext.Provider is wrapper
// useContext- every item within root component ( in this case List) will have access to the function, after destructuring. There is no need to pass the function in every stage.
// we kan use useContext to pass other things too. see "people" in this example

const PersonContext = React.createContext(); //this give us access to to components= Provider an Consumer


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // test: <PersonContext.Provider value='mrun'>
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}

          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // test: const data = useContext(PersonContext);
  // test: console.log(data);
  const { removePerson } = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
