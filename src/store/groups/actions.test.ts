import * as actions from "./actions";
import * as constants from "./constants";

const groups = [
  {
    id: "string",
    name: "string",
    latestMessage: "string",
    imageUrl: "string",
    description: "string",
    createdTime: "string"
  }
];

const error = { error: "message" };

describe("Groups Actions - Should Return Expected Response", () => {
  it(" On Success", () => {
    expect(actions.fetchGroupSuccess(groups)).toEqual({
      type: constants.FETCH_GROUPS_SUCCESS,
      payload: groups
    });
  });

  it("On Failure", () => {
    expect(actions.fetchGroupFailure(error)).toEqual({
      type: constants.FETCH_GROUPS_FAILURE,
      error
    });
  });

  it("On Fetching", () => {
    expect(actions.fetchGroups("userId")).toEqual({
      type: constants.FETCH_GROUPS,
      userId: "userId"
    });
  });
});
