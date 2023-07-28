// store.js
/*import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
*/

import { createStore } from 'redux';
const initialState = {
  name: '',
  contactNumber: '',
  email: '',
  message: '',
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_CONTACT_NUMBER':
      return { ...state, contactNumber: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
const store = createStore(formReducer);
export default store;

/*import { createStore } from 'redux';
import rootReducer from './reducer'; // assuming you have a root reducer file

const store = createStore(rootReducer);

export default store;*/