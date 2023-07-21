// actions.js
export const loginUser = (email, password) => ({
    type: 'LOGIN_USER',
    payload: {
      email,
      password,
    },
  });
  