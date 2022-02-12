const defaultState = {
  userDate: {},
  userDateUrl: {},
};

export const userReducer = (state = defaultState, action) => {
  console.log("STATE:", state);
  switch (action.type) {
    case "SET_QR":
      return { ...state, qr: action.payloader };
    case "SET_USER_DATE":
      return { ...state, userDate: action.payloader };
    case "SET_USER_DATE_URL":
      return { ...state, userDateUrl: action.payloader };
    default:
      return state;
  }
};
