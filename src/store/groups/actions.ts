import * as constants from "./constants";

export const fetchGroups = (userId: string) => {
  return {
    type: constants.FETCH_GROUPS,
    userId
  };
};

export const fetchGroupSuccess = (data: constants.Group[]) => {
  return {
    type: constants.FETCH_GROUPS_SUCCESS,
    payload: data
  };
};

export const fetchGroupFailure = error => {
  return {
    type: constants.FETCH_GROUPS_FAILURE,
    error
  };
};
