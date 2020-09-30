const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: "Login Success",
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
