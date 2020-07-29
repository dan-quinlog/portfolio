export const openNewProjectModal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "OPEN_NEW_PROJECT_MODAL" });
  };
};

export const openProjectModal = (project) => {
  return (dispatch, getState) => {
    dispatch({ type: "OPEN_PROJECT_MODAL", project });
  };
};

export const closeProjectModal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "CLOSE_PROJECT_MODAL" });
  };
};
