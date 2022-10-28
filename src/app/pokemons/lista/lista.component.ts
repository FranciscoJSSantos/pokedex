import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Pokemon } from "src/app/shared/Pokemon";
import { ListarService } from "../../services/listar.service";
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
    public dialog: MatDialog
  ) {}
  pokemons: Pokemon[];

  ngOnInit(): void {
    this._pokemonService.getAllPokemons().subscribe((lista) => {
      this.pokemons = lista.detailsPokemon;
    });
  }

  capturarPokemon(pokemon) {
    this.dialog.open(DialogComponent);
  }

  // getPokes(): void {
  //   let pokeData;

  //   for (let i = 1; i < 150; i++) {
  //     this._pokemonService.getPokemons(i).subscribe(
  //       (res) => {
  //         pokeData = {
  //           id: i,
  //           name: res.name,
  //           image: res.sprites.front_default,
  //         };
  //         this.pokemons.push(pokeData);
  //       },
  //       (err) => {
  //         console.error("Pokemon morreu..", err);
  //       }
  //     );
  //   }
  // }

  // OnPageChange(event: PageEvent) {
  //   const startIndex = event.pageIndex * event.pageSize;
  //   let endIndex = startIndex + event.pageSize;
  //   if (endIndex > this.cardItems.length) {
  //     endIndex = this.cardItems.length;
  //   }

  //   this.pageSlice = this.cardItems.slice(startIndex, endIndex);
  // }
}
