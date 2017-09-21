export default (state = 0, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { stepNumber } = action;
      return [
        ...state,
        {
          stepNumber: stepNumber,
        }
      ]
      default:
       return state;
  }
}
