import * as constants from "./constants";

interface InitialState {
  data: constants.Group[];
  loading: boolean;
  error: object;
}

const initialState: InitialState = {
  data: [],
  loading: false,
  error: null
};

interface Action {
  type: string;
  payload: Record<string, constants.Group>;
}

const groups = (state = initialState, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case constants.FETCH_GROUPS:
      return { ...state, loading: true };
    case constants.FETCH_GROUPS_SUCCESS:
      return { ...state, data: payload, loading: false };
    case constants.FETCH_GROUPS_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default groups;
