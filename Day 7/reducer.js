// reducer.js
const initialState = {
    loggedInUser: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          loggedInUser: action.payload.email,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  