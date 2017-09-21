export default (state = [], action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { history, squares } = action;
      return [
        ...state,
        {
          history: history,
        }
      ]
      default:
       return state;
  }
}
