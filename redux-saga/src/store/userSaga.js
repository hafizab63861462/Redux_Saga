import { call, put, takeEvery } from "redux-saga/effects";
import { userActions } from "./userState";

function* FetchUsers() {
  try {
    const response = yield call(() =>
      fetch("https://gorest.co.in/public/v2/users")
    );

    const parsedUsersData = yield response.json();
    yield put(userActions.getUsersSuccess(parsedUsersData));
  } catch (error) {
    yield put(userActions.getUsersFailure(error));
  }
}
function* userSaga() {
  yield takeEvery("user/getUsers", FetchUsers);
}

export default userSaga;
