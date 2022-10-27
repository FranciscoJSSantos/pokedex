import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Teste } from "src/app/shared/Pokemon";

@Injectable({
  providedIn: "root",
})
export class ListarService {
  pokemons = [];

  public listaCapturados: any = [];

  public pokemonCapturados$: any[] = [];

  constructor(private _http: HttpClient) {}

  configUrl: string = "https://pokeapi.co/api/v2/";
  urlImage: string =
    "https:/assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  getPokemons(index?: number | string): any {
    return this._http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }
}
