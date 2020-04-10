const initialState = {
  fighterOneName: '',
  fighterTwoName: '',
  fighterOneRoundScore: 0,
  fighterTwoRoundScore: 0,
  fighterOneTotal: 0,
  fighterTwoTotal: 0,
  currentRound: 1,
  fightLength: 12
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'hello':

      break;

    default:
      return state;
  }
}

export default reducer;