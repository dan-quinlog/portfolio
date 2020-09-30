const initState = {
  viewFilter: "profile",
};

const dashReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_VIEW_FILTER":
      return {
        ...state,
        viewFilter: action.viewFilter,
      };
    default:
      return state;
  }
};

export default dashReducer;
