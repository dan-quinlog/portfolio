export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    //async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
