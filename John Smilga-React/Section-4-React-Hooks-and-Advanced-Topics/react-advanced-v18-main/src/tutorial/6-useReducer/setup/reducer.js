
// reducer function
export const reducer = (state, action) => {
    // test: console.log(state,action);
    //https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22325270#questions/16545804
  
    //if (action.type === 'TESTING') {
    if (action.type === 'ADD_ITEM') {
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        // people: data,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added'
      };
    }
    if (action.type === 'NO_VALUE') {
      return { ...state, isModalOpen: true, modalContent: 'please, enter value' };
    }
    if (action.type === 'CLOSE_MODAL') {
      return { ...state, isModalOpen: false };
    }
    if (action.type === "REMOVE_ITEM") {
      const newPeople = state.people.filter((person) =>
        person.id !== action.payload);
      return { ...state, people: newPeople }
    }
  
    //return state; //always have to return state.
    throw new Error('no matching action type')
  }