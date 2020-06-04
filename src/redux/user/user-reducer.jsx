// Init value when component is mounted for first time
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // State which is current is passed by redux store
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
