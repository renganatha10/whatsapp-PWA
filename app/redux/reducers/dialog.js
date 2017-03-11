import * as constants from './../constants/dialog';
const initialState = {
  open: false,
  image: null,
  x: 0,
  y: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
  case constants.DISPLAY_POP_UP:
    return {
      ...state,
      open: true,
      image: action.image,
      x: action.x,
      y: action.y
    };
  case constants.HIDE_POP_UP:
    return {
      ...state,
      open: false
    };
  }
  return state;
}
