export default (
  state = Array(9).fill(null),
  action
) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { squares } = action;
      return squares;
    default:
      return state;
  }
}
