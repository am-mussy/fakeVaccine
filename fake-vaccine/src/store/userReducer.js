const defaultState = {
  qr: "HELL",
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "setQR":
      return { ...state, qr: action.payloader };
    default:
      return state;
  }
};
