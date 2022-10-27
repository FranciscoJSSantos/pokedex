export enum CapturadosActionsType {
  AddCapturados = "[Capturados] Add Capturado",
}

export const AddCapturado = (pokemon) => {
  return {
    type: CapturadosActionsType.AddCapturados,
    payload: pokemon,
  };
};
