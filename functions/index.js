const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log("notification added", doc);
    });
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.blogCreated = functions.firestore
  .document("blogs/{blogId}")
  .onCreate((doc) => {
    const blog = doc.data();
    const notification = {
      content: "Added a new blog post",
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

// firebase deploy --only functions
