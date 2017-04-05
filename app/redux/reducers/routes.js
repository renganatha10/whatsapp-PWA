import { SELECT_CHAT, SELECT_DETAILS, CLOSE_CONTACT } from './../constants/routes';

const initialState = {
  routeName: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
  case CLOSE_CONTACT:
  case SELECT_CHAT:
    return { ...state, routeName: 2 };
  case SELECT_DETAILS:
    return { ...state, routeName: 3 };
  }
  return state;
}
