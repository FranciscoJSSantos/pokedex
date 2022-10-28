import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Named, Pokemon, Pokemons } from "src/app/shared/Pokemon";

@Injectable({
  providedIn: "root",
})
export class ListarService {
  private readonly urlPokemon =
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

  constructor(private _http: HttpClient) {}

  getAllPokemons(): Observable<Pokemons> {
    return this._http.get<Named>(this.urlPokemon).pipe(
      map((data) => {
        return {
          detailsPokemon: data.results.map((result, i) => ({
            name: result.name,
            id: i + 1,
            urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              i + 1
            }.png`,
          })),
        };
      })
    );
  }
}
