import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from '../Types/Types';
  
  const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return { ...state, loading: false, user: action.payload, error: null };
      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  