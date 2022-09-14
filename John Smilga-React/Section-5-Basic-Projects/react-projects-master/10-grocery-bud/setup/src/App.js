import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocaleStorage =() =>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocaleStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    if (!name) {
      //display alert
      // setAlert({show:true, msg:'please, enter value',type:'danger'}); or create show Alert function
      showAlert(true, 'danger', 'please, enter value');

    } else if (name && isEditing) {
      //deal with edit
      setList(list.map((item)=>{
        if(item.id === editID){
          return {...item, title:name};
        }
        return item;
      }));
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value change');
    } else {
      // show alert
      showAlert(true,'success','item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
    //5:43 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22676711#questions/16545804
  }
  const clearList =()=>{
    showAlert(true,'danger','empty list');
    setList([]);
  }
  const removeItem = (id) =>{
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item)=> item.id !==id));
  }
  const editItem = (id) =>{
    const specificItem = list.find((item)=> item.id ===id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  useEffect(()=>{
    //locale storage
localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return (
  <section className='section-center'>
    <form
      className='grocery-form'
      onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      {/* list={list}  removes bub with alert 3.46 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22676809#questions/16545804*/}
      <h3>Grocery bud</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='e.g.egs' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearList}>clear items</button>

      </div>
    )}

  </section>)
}

export default App
