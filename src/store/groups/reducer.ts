import * as constants from "./constants";

interface InitialState {
  data: constants.Group[];
  loading: boolean;
  error: null | object;
}

const initialState: InitialState = {
  data: [],
  loading: false,
  error: null
};

interface Action {
  type: string;
  payload: Record<string, constants.Group>;
  error: object;
}

const groups = (state = initialState, action: Action) => {
  const { payload, type, error } = action;
  switch (type) {
    case constants.FETCH_GROUPS:
      return { ...state, loading: true };
    case constants.FETCH_GROUPS_SUCCESS:
      return { ...state, data: payload, error: null, loading: false };
    case constants.FETCH_GROUPS_FAILURE:
      return { ...state, error, loading: false };
    default:
      return state;
  }
};

export default groups;
