const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
  case 'TEST':
    return action.payload;
  }
  return state;
}
