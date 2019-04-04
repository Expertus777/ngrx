import * as Scoreboard from './scoreboard.actions';

export interface ScoreState {
  chicagoBulls: number;
  losAngelesLakers: number;
}

export const initialState: ScoreState = {
  chicagoBulls: 0,
  losAngelesLakers: 0,
};

export function scoreboardReducer(
  state = initialState,
  action: Scoreboard.ActionUnion): ScoreState {
  switch (action.type) {
    case Scoreboard.ActionTypes.IncrementChicagoBulls: {
      return {
        ...state,
        chicagoBulls: state.chicagoBulls + 1,
      };
    }
    case Scoreboard.ActionTypes.IncrementLosAngelesLakers: {
      return {
        ...state,
        losAngelesLakers: state.losAngelesLakers + 1,
      };
    }
    case Scoreboard.ActionTypes.Reset: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
