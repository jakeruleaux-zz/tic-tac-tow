
export default (
  state = [{ squares: Array(9).fill(null) }],
  action
) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { history } = action;
      return history;
    default:
       return state;
  }
}
