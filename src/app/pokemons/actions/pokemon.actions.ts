import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/shared/Pokemon";

//tipo da ação registrada
export const actionTypes = {
  load: "[Pokemon] load",
  success: "[Pokemon] success",
  failure: "[Pokemon] failure",
  catch: "[Pokemon] catch",
  remove: "[Pokemon] remove",
};

export const loads = createAction(actionTypes.load);

export const loadSuccess = createAction(
  actionTypes.success,
  props<{ detailsPokemon: Pokemon[] }>()
);

export const loadFailure = createAction(
  actionTypes.failure,
  props<{ error: any }>()
);

export const catchSuccess = createAction(
  actionTypes.catch,
  props<{ pokemon: Pokemon }>()
);

export const removeSucecss = createAction(
  actionTypes.remove,
  props<{ remover: number }>()
);
