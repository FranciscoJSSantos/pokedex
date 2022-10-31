import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  MemoizedSelector,
  on,
} from "@ngrx/store";
import { Pokemon } from "src/app/shared/Pokemon";
import * as pokemonAction from "../actions/pokemon.actions";

export const pokemonFeatureKey = "pokemon";

export interface State {
  detailsPokemon: Pokemon[];
  capturados: Pokemon[];
}

export const initialState: State = { detailsPokemon: [], capturados: [] };

const pokemonReducer = createReducer(
  initialState,
  on(pokemonAction.loadSuccess, (state, { detailsPokemon }) => ({
    ...state,
    detailsPokemon,
  })),
  on(pokemonAction.catchSuccess, (state, { pokemon }) => ({
    ...state,
    capturados: [...state.capturados, pokemon],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return pokemonReducer(state, action);
}

export const selectPokemonState: MemoizedSelector<object, State> =
  createFeatureSelector<State>(pokemonFeatureKey);

export const selectDetailsPokemon: MemoizedSelector<object, Pokemon[]> =
  createSelector(selectPokemonState, (state: State) => state.detailsPokemon);

export const selectCatchedPokemon: MemoizedSelector<object, Pokemon[]> =
  createSelector(selectPokemonState, (state: State) => state.capturados);
