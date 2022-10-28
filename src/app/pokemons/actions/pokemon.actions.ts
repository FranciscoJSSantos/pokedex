import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/shared/Pokemon";

//tipo da ação registrada
export const actionTypes = {
  load: "[Pokemon] load",
  success: "[Pokemon] success",
  failure: "[Pokemon] failure",
};

export const loads = createAction(actionTypes.load);

export const loadsSuccess = createAction(
  actionTypes.success,
  //depois trocar pra Pokemon[]
  props<{ detailsPokemon: Pokemon[] }>()
);

export const loadsFailure = createAction(
  actionTypes.failure,
  props<{ error: any }>()
);
