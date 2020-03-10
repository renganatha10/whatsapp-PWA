import { fork } from "redux-saga/effects";
import groupSagas from "./groups/sagas";

function* rootSaga() {
  yield fork(groupSagas);
}

export default rootSaga;
