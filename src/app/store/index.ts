import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPokemon from '../pokemons/reducers/pokemon.reducer';


export interface State {

  [fromPokemon.pokemonFeatureKey]: fromPokemon.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromPokemon.pokemonFeatureKey]: fromPokemon.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
