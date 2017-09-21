export default (state = true, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      const { xIsNext } = action;

      function toggleWhosNext(xIsNext) {
        let poop = xIsNext === true ? false : true;
        console.log(poop);
        return poop;
      }

      return {
        xIsNext: toggleWhosNext(xIsNext),
      }
      default:
       return state;
  }
}
