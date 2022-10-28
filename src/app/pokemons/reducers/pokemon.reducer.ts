import { Action, createReducer, on } from "@ngrx/store";

export const pokemonFeatureKey = "pokemon";

export interface State {}

export const initialState: State = {};

const pokemonReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return pokemonReducer(state, action);
}
