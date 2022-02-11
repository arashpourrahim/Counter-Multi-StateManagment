// eslint-disable-next-line import/no-anonymous-default-export
export default (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};
