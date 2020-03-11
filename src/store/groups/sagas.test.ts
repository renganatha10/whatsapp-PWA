import { fork, take } from "redux-saga/effects";
import { runSaga } from "redux-saga";
import fetch from "isomorphic-unfetch";

import * as constants from "./constants";
import { fetchGroupSuccess, fetchGroupFailure } from "./actions";
import groupsSaga, { waitForFetchGroups, fetchGroups } from "./sagas";

jest.mock("isomorphic-unfetch");

describe("Group Sagas", () => {
  const genGroupsSaga = groupsSaga();
  const genLoadGroupsSaga = waitForFetchGroups();
  it("Should Fork the loadGroups", () => {
    expect(genGroupsSaga.next().value).toEqual(fork(waitForFetchGroups));
  });
  it("Should Done On next iteration", () => {
    expect(genGroupsSaga.next().done).toBeTruthy();
  });
  it("Should Wait for Fetch Groups", () => {
    expect(genLoadGroupsSaga.next().value).toEqual(
      take(constants.FETCH_GROUPS)
    );
  });

  it("Should Call Api And Dispatch Success", async () => {
    const dummyGroups = [
      {
        id: "id",
        name: "Name",
        latestMessage: "latestMessage",
        imageUrl: "imageUrl",
        description: "description",
        createdTime: "createdTime"
      }
    ];

    //eslint-disable-next-line
    //@ts-ignore
    fetch.mockReturnValue(Promise.resolve({ json: () => dummyGroups }));

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchGroups,
      "userId"
    ).toPromise();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchGroupSuccess(dummyGroups)]);
  });

  it("Should Call API and Dispatch Error Action", async () => {
    const error = { message: "someError" };
    //eslint-disable-next-line
    //@ts-ignore
    fetch.mockReturnValue(Promise.reject(error));

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      fetchGroups,
      "userId"
    ).toPromise();

    expect(dispatched).toEqual([fetchGroupFailure(error)]);
  });
});
