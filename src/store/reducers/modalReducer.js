const initState = {
  projectModal: false,
  project: null,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_NEW_PROJECT_MODAL":
      return {
        ...state,
        projectModal: true,
        project: null,
      };
    case "OPEN_PROJECT_MODAL":
      return {
        ...state,
        projectModal: true,
        project: action.project,
      };
    case "CLOSE_PROJECT_MODAL":
      return {
        ...state,
        projectModal: false,
        project: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
