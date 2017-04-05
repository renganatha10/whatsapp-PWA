import { SELECT_CHAT, SELECT_DETAILS, CLOSE_CONTACT } from './../constants/routes';

export function selectChat() {
  return {
    type: SELECT_CHAT
  };
}

export function selectDetails() {
  return {
    type: SELECT_DETAILS
  };
}

export function closeContact() {
  return {
    type: CLOSE_CONTACT
  };
}
