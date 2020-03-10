export const FETCH_GROUPS = "FETCH_GROUPS";
export const FETCH_GROUPS_SUCCESS = "FETCH_GROUPS_SUCCESS";
export const FETCH_GROUPS_FAILURE = "FETCH_GROUPS_FAILURE";

export interface Group {
  id: string;
  name: string;
  latestMessage: string;
  imageUrl: string;
  description: string;
  createdTime: string;
}
