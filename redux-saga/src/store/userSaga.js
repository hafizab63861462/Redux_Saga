import { call, put, takeEvery } from "redux-saga/effects";
import { userActions } from "./userState";

function* workGetUserFetch() {
  const response = yield call(() =>
    fetch("https://gorest.co.in/public/v2/users")
  );

  const formattedUsers = yield response.json();
  yield put(userActions.getUsersSuccess(formattedUsers));
}
function* userSaga() {
  yield takeEvery("user/getUsersFetch", workGetUserFetch);
}

export default userSaga;
