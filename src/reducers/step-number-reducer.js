export default (state = 0, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { stepNumber } = action;
      return stepNumber
      default:
       return state;
  }
}
