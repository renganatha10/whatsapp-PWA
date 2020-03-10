import { fork, put, take } from "redux-saga/effects";
import "isomorphic-unfetch";
import * as constants from "./constants";
import { fetchGroupFailure, fetchGroupSuccess } from "./actions";

function* loadGroups() {
  try {
    const { userId } = yield take(constants.FETCH_GROUPS);
    const res = yield fetch(`https://whatsapp-pwa.now.sh/api/group/${userId}`);
    const groups: constants.Group[] = yield res.json();
    yield put(fetchGroupSuccess(groups));
  } catch (err) {
    yield put(fetchGroupFailure(err));
  }
}

function* groupsSaga() {
  yield fork(loadGroups);
}

export default groupsSaga;
