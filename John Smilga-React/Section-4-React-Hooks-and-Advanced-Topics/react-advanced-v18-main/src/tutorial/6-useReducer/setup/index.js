import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import{reducer} from './reducer';
const defaultState = {
  people: [],
  //test: people: data,
  isModalOpen: false,
  // test: isModalOpen: true,
  modalContent: '',
  //test: modalContent: 'MRUN'
}

const Index = () => {
  const [name, setName] = useState('');
  // before useReducer:
  // const [people,setPeople]= useState(data);
  // const [showModal, setShowModal] = useState(false);

  // after useReducer:
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // before useReducer:
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName('');

      //dispatch({type:'TESTING'});
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem }); //"payload" is convention
      setName('');
    } else {
      // before useReducer:
      // setShowModal(true);
      //dispatch({ type: 'RANDOM' });
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (<>
    {/* {before useReducer: showModal && <Modal />} */}
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}
    />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">add</button>
    </form>
    {/* before useReducer: {people.map((person) => { */}
    {state.people.map((person) => {
      return (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>remove item</button>
        </div>
      );
    })}
  </>);
};

export default Index;
