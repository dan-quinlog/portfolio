export const openNewProjectModal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "OPEN_NEW_PROJECT_MODAL" });
  };
};

export const closeNewProjectModal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "CLOSE_NEW_PROJECT_MODAL" });
  };
};
