import { fork, put, take, call } from "redux-saga/effects";
import fetch from "isomorphic-unfetch";
import * as constants from "./constants";
import { fetchGroupFailure, fetchGroupSuccess } from "./actions";

export function* waitForFetchGroups() {
  const { userId } = yield take(constants.FETCH_GROUPS);
  yield call(fetchGroups, userId);
}

export function* fetchGroups(userId) {
  try {
    const res = yield fetch(`https://whatsapp-pwa.now.sh/api/group/${userId}`);
    const groups: constants.Group[] = yield res.json();
    yield put(fetchGroupSuccess(groups));
  } catch (err) {
    yield put(fetchGroupFailure(err));
  }
}

function* groupsSaga() {
  yield fork(waitForFetchGroups);
}

export default groupsSaga;
