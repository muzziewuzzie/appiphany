export const userDetails = {
  loggedIn: false,
  username: "",
  email: "",
  index: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LogIn":
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
        email: action.payload.email,
        index: action.payload.index,
      };
    case "IncrementIndex":
      return { ...state, index: state.index + 1 };
    case "DecrementIndex":
      return { ...state, index: state.index - 1 };
    default:
      return state;
  }
};
