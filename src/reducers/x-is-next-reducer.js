export default (state = false, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { xIsNext } = action;
      return [
        ...state,
        {
          xIsNext: xIsNext,
        }
      ]
      default:
       return state;
  }
}
