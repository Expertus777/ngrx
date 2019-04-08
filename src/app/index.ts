import { createSelector } from '@ngrx/store';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => {
  return state.feature;
};

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => {
    return state.counter;
  }
);
