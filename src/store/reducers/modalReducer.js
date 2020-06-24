const initState = {
  newProjectModal: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_NEW_PROJECT_MODAL":
      return {
        ...state,
        newProjectModal: true,
      };
    case "CLOSE_NEW_PROJECT_MODAL":
      return {
        ...state,
        newProjectModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
