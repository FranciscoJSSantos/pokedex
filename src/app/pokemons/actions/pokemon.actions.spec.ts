import { Pokemon } from "src/app/shared/Pokemon";
import * as action from "./pokemon.actions";

const poke: Pokemon[] = [
  { id: 1, name: "Lourival", urlImage: "teste1" },
  { id: 2, name: "Francisco", urlImage: "teste2" },
];

const errorLoad: any = "";

const removerload: number = 1;

describe("loads", () => {
  it("should return an action", () => {
    expect(action.loads().type).toBe(action.actionTypes.load);
  });
});

describe("loadSucess", () => {
  it("action type", () => {
    expect(action.loadSuccess({ detailsPokemon: poke }).type).toBe(
      action.actionTypes.success
    );
  });

  it("action props", () => {
    expect(action.loadSuccess({ detailsPokemon: poke }).detailsPokemon).toEqual(
      poke
    );
  });
});

describe("loadFailure", () => {
  it("action type", () => {
    expect(action.loadFailure({ error: errorLoad }).type).toBe(
      action.actionTypes.failure
    );
  });

  it("action props", () => {
    expect(action.loadFailure({ error: errorLoad }).error).toEqual("");
  });
});

describe("catchSuccess", () => {
  it("action type", () => {
    expect(action.catchSuccess({ pokemon: poke[0] }).type).toBe(
      action.actionTypes.catch
    );
  });

  it("action props", () => {
    expect(action.catchSuccess({ pokemon: poke[0] }).pokemon).toEqual(poke[0]);
  });
});

describe("removeSucecss", () => {
  it("action type", () => {
    expect(action.removeSucecss({ remover: removerload }).type).toBe(
      action.actionTypes.remove
    );
  });

  it("action props", () => {
    expect(action.removeSucecss({ remover: removerload }).remover).toEqual(1);
  });
});
