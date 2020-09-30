export const setViewFilter = (viewFilter) => {
  return (dispatch, getState) => {
    dispatch({ type: "SET_VIEW_FILTER", viewFilter });
  };
};