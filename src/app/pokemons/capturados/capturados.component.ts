import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Pokemon } from "src/app/shared/Pokemon";
import * as pokemonAction from "../actions/pokemon.actions";
import * as reducer from "../reducers/pokemon.reducer";

@Component({
  selector: "app-capturados",
  templateUrl: "./capturados.component.html",
  styleUrls: ["./capturados.component.scss"],
})
export class CapturadosComponent implements OnInit {
  catched$: Observable<Pokemon[]>;

  constructor(public store: Store<reducer.State>) {}

  ngOnInit() {
    this.catched$ = this.store.pipe(select(reducer.selectCatchedPokemon));
  }

  removerPokemon(i: number) {
    this.store.dispatch(pokemonAction.removeSucecss({ remover: i }));
  }
}
