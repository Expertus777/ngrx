import { Action } from '@ngrx/store';

export enum ActionTypes {
  IncrementChicagoBulls = '[Scoreboard Page] Chicago Bulls Score',
  IncrementLosAngelesLakers = '[Scoreboard Page] Los Angeles Lakers Score',
  Reset = '[Scoreboard Page] Score Reset',
}

export class IncrementChicagoBulls implements Action {
  readonly type = ActionTypes.IncrementChicagoBulls;
}

export class IncrementLosAngelesLakers implements Action {
  readonly type = ActionTypes.IncrementLosAngelesLakers;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;

  constructor(public payload: { chicagoBulls: number; losAngelesLakers: number}) {}
}

export type ActionUnion = IncrementChicagoBulls | IncrementLosAngelesLakers | Reset;

