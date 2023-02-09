import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userState";
import userSaga from "./userSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [saga],
});
saga.run(userSaga);

export default store;
