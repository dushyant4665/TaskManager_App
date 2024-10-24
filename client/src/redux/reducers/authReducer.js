// const initialState = { authData: null, error: null };

// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'LOGIN_SUCCESS':
//         case 'REGISTER_SUCCESS':
//             localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
//             return { ...state, authData: action.payload, error: null };
//         case 'LOGIN_FAIL':
//         case 'REGISTER_FAIL':
//             return { ...state, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default authReducer;


const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
