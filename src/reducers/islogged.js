const initialState = false;

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
