export interface Named {
  count: number;
  next: string;
  previous?: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}

export interface Teste {
  id: string | number;
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
}
