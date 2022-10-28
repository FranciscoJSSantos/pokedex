import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { ListarService } from "../../services/listar.service";
import * as pokemonAction from "../actions/pokemon.actions";

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private service: ListarService) {}

  loadPokemon$ = createEffect(() =>
    this.actions$.pipe<any, any>(
      ofType(pokemonAction.actionTypes.load),

      mergeMap(() =>
        this.service.getAllPokemons().pipe(
          map((data) =>
            pokemonAction.loadsSuccess({
              detailsPokemon: data.detailsPokemon,
            })
          )
        )
      )
    )
  );
}
