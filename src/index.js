import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import fbConfig, { storage } from "./config/fbConfig";

const store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, storage })),
    reduxFirestore(fbConfig)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={fbConfig}
        config={fbConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
