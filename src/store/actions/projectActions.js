//import { storage } from "../../config/fbConfig";

export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, storage }) => {
    //async call to database
    const { type, title, content, image } = project;

    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        type,
        title,
        content,
        image: false,
        createdAt: new Date(),
      })
      .then((res) => {
        console.log(res.id);
        if (image !== "") {
          const uploadTask = storage.ref(`images/${res.id}`).put(image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              console.log(error);
            },
            () => {
              storage
              .ref("images")
              .child(res.id)
              .getDownloadURL()
              .then((url) => {
                firestore
                  .collection("projects")
                  .doc(res.id)
                  .update({ image: url });
                  console.log(url);
                });
            }
          );
        }
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
