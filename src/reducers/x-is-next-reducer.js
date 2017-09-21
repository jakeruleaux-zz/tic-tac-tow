export default (state = false, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { xIsNext } = action;
      return xIsNext;
      default:
       return state;
  }
}
