const initState = {
  viewFilter: "profile",
  hamburgerView: false,
};

const dashReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_VIEW_FILTER":
      return {
        ...state,
        viewFilter: action.viewFilter,
        hamburgerView: false,
      };
    case "TOGGLE_HAMBURGER":
      console.log(!state.hamburgerView);
      return {
        ...state,
        hamburgerView: !state.hamburgerView,
      };
    default:
      return state;
  }
};

export default dashReducer;
