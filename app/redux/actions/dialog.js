import * as constants from '../constants/dialog';

export function showPopUp(image, x, y) {
  return {
    type: constants.DISPLAY_POP_UP,
    image,
    x,
    y
  };
}

export function hidePopup() {
  return {
    type: constants.HIDE_POP_UP
  };
}
