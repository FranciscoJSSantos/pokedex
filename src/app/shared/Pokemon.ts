export interface Named {
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  urlImage: string;
}

export interface Pokemons {
  detailsPokemon: Pokemon[];
}
