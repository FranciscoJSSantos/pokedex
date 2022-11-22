import { Pokemon } from "src/app/shared/Pokemon";
import * as actions from "../actions/pokemon.actions";
import { initialState, pokemonReducer, reducer } from "./pokemon.reducer";

describe("Pokemon Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  it("success with loadsSucess", () => {
    const state = reducer(
      initialState,
      actions.loadSuccess({ detailsPokemon: poke })
    );

    expect(state.detailsPokemon).toEqual(poke);
  });

  it("success with catchSucess", () => {
    reducer(initialState, actions.catchSuccess({ pokemon: poke[0] }));

    expect(actions.catchSuccess({ pokemon: poke[0] }).pokemon).toEqual(poke[0]);
  });
});

const poke: Pokemon[] = [
  { id: 1, name: "Lourival", urlImage: "teste1" },
  { id: 2, name: "Francisco", urlImage: "teste2" },
];
