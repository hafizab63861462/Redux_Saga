import { call, put, takeEvery } from "redux-saga/effects";
import { userActions } from "./userState";

function* workGetUserFetch() {
  try {
    const response = yield call(() =>
      fetch("https://gorest.co.in/public/v2/users")
    );

    const formattedUsers = yield response.json();
    yield put(userActions.getUsersSuccess(formattedUsers));
  } catch (error) {
    yield put(userActions.getUsersFailure(error));
  }
}
function* userSaga() {
  yield takeEvery("user/getUsers", workGetUserFetch);
}

export default userSaga;
