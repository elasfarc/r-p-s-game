import { MODES } from "game_const.js";

const initState = {
  mode: MODES[0],
  isSingle: true,
  roundCount: 5,
  names: { p1: "", p2: "" },
  score: { p1: 0, p2: 0 },
  history: {},
};

const ACTIONS = {
  CHANGE_MODE_SINGLE: "change-mode-single",
  CHANGE_MODE_MULTI: "change-mode-multi",
  CHANGE_NAME_P1: "change-name-p1",
  CHANGE_NAME_P2: "change-name-p2",
  CHANGE_NAMES: "change-names",
  CHANGE_ROUNDS_NUMBER: "change-rounds",
  MAKE_MOVE: "make-move",
};
function stateReducer(state) {
  return ({ payload: { action, data } }) => {
    switch (action) {
      case ACTIONS.CHANGE_MODE_SINGLE:
        return {
          ...state,
          mode: MODES[0],
          isSingle: true,
          names: { ...state.names, p2: "COMPUTER 🖥️" },
        };
      case ACTIONS.CHANGE_MODE_MULTI:
        return {
          ...state,
          mode: MODES[1],
          isSingle: false,
        };
      case ACTIONS.CHANGE_NAME_P1:
        return { ...state, names: { ...state.names, p1: data } };
      case ACTIONS.CHANGE_NAME_P2:
        return { ...state, names: { ...state.names, p2: data } };
      case ACTIONS.CHANGE_NAMES:
        return { ...state, names: { p1: data.p1, p2: data.p2 } };
      case ACTIONS.CHANGE_ROUNDS_NUMBER:
        return { ...state, roundCount: data };
      case ACTIONS.MAKE_MOVE:
        const {
          winner,
          move: { p1, p2 },
          round,
        } = data;
        return {
          ...state,
          score: { ...state.score, [winner]: state.score[winner]++ },
          history: {
            ...state,
            history: { ...state.history, [round + 1]: { p1, p2, winner } },
          },
        };
      default:
        return state;
    }
  };
}

const dispatch = stateReducer(initState);

export { ACTIONS, dispatch };
