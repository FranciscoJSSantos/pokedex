import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Pokemon } from "../../shared/Pokemon";

import { ListarService } from "../../services/listar.service";
import * as pokemonAction from "../actions/pokemon.actions";
import { DialogComponent } from "../dialog/dialog.component";
import * as reducer from "../reducers/pokemon.reducer";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"],
})
export class ListaComponent implements OnInit {
  constructor(
    public _pokemonService: ListarService,
    public dialog: MatDialog,
    public store: Store<reducer.State>
  ) {}
  pokemons: Pokemon[];
  pokemons$: Observable<Pokemon[]>;

  ngOnInit(): void {
    // this._pokemonService.getAllPokemons().subscribe((lista) => {
    //   this.pokemons = lista.detailsPokemon;
    // });
    this.pokemons$ = this.store.pipe(select(reducer.selectDetailsPokemon));

    this.store.dispatch(pokemonAction.loads());
  }

  capturarPokemon(pokemon) {
    this.dialog.open(DialogComponent);

    this.store.dispatch(pokemonAction.catchSuccess({ pokemon }));
  }
}
