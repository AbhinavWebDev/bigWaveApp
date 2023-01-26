const defaultState = require("../Store/state.json");
const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case "LOGIN_START":
      return { ...state, error: false };
    case "LOGIN_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        error: false,
      };

    case "LOGIN_FAIL":
      return { ...state, error: true };

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null,signData:null, error: false };
    default:
      return state;


      case "SIGNUP_AUTH_START":
      return { ...state, error: false };
    case "SIGNUP_AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        signData: action.data,
        error: false,
      };

    case "SIGNUP_AUTH_FAIL":
      return { ...state, error: true };


      


      case "MAIL_VERIFY_START":
        return { ...state, error: false };
      case "MAIL_VERIFY_SUCCESS":
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        return {
          ...state,
          authData: action.data,
          error: false,
        };
  
      case "MAIL_VERIFY_FAIL":
        return { ...state, error: true };



        case "MAIL_UPDATE_PASSWORD_START":
      return { ...state, error: false };
    case "MAIL_UPDATE_PASSWORD_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log("action.data",action);
      return {
        ...state,
        signData: action.data,
        error: false,
       
      };

    case "MAIL_UPDATE_PASSWORD_FAIL":
      return { ...state, error: true };


      case "CHANGE_MAIL_START":
        return { ...state, error: false };
      case "CHANGE_MAIL_SUCCESS":
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        
        return {
          ...state,
          response: action.data,
          error: false,
        };

  
      case "CHANGE_MAIL_FAIL":
        return { ...state, error: true };
  }
};




export default authReducer;
